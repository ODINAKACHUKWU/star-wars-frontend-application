import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import queryString from "query-string";
import searchRequest from "../../../actions/creators/searchActions";
import { ZoomIn } from "../elements/Animations";

import "../../../assets/stylesheets/components/elements/background.scss";
import Spinner from "../elements/Spinner";

class SearchResultLoader extends Component {
  componentDidMount() {
    const { history, search } = this.props;
    const params = queryString.parse(history.location.search);

    search(params.name).then(() => {
      const { result } = this.props;
      if (result.length > 1) {
        history.replace({
          search: `?name=${params.name}`,
        });
      } else if (result.length === 1) {
        history.replace({
          search: `?name=${result[0].name}`,
        });
      }
    });
  }

  getLinkPath = (item) => {
    if (item.gender) {
      return `/characters/${item.id}`;
    }
    if (item.climate) {
      return `/planets/${item.id}`;
    }
    if (item.model) {
      return `/starships/${item.id}`;
    }
  };

  render() {
    const { result, error, searching } = this.props;
    return (
      <div className="intro-overlay">
        <div className="container d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-md-12">
              {searching ? (
                <Spinner />
              ) : (
                <ZoomIn>
                  <div className="details-card p-5 text-white">
                    {error
                      ? error
                      : result.map((item) => (
                          <div className="search-list">
                            <Link to={this.getLinkPath(item)}>
                              <div className="card border-0 mb-3">
                                <div className="card-body text-white card-dark">
                                  <h5 className="card-title">{item.name}</h5>
                                </div>
                              </div>
                            </Link>
                          </div>
                        ))}
                  </div>
                </ZoomIn>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ search: { result, searching, error } }) => ({
  result,
  searching,
  error,
});

const mapDispatchToProps = (dispatch) => ({
  search: (name) => dispatch(searchRequest(name)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchResultLoader)
);
