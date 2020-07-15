import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import searchRequest from "../../../actions/creators/searchActions";

class SearchInput extends Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name } = this.state;
    const { search } = this.props;

    search(name).then(() => {
      const { history } = this.props;
      history.push({
        pathname: "/search",
        search: `?name=${name}`,
      });
    });
  };

  render() {
    const { name } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={name}
            onChange={this.handleChange}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({ search: { result } }) => ({
  result,
});

const mapDispatchToProps = (dispatch) => ({
  search: (name) => dispatch(searchRequest(name)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchInput)
);
