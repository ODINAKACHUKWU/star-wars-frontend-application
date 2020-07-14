import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import { FadeIn } from "../elements/Animations";
import Spinner from "../elements/Spinner";

import "../../../assets/stylesheets/components/elements/background.scss";

import character1 from "../../../assets/images/character-1.jpg";
import character2 from "../../../assets/images/character-2.jpg";
import character3 from "../../../assets/images/character-3.jpg";
import character4 from "../../../assets/images/character-4.jpg";
import character5 from "../../../assets/images/character-5.png";
import character6 from "../../../assets/images/character-6.jpg";
import character7 from "../../../assets/images/character-7.jpg";
import character8 from "../../../assets/images/character-8.png";

class CharacterList extends Component {
  getRandomImage = () => {
    const images = [
      character1,
      character2,
      character3,
      character4,
      character5,
      character6,
      character7,
      character8,
    ];
    return images[Math.floor(Math.random() * images.length)];
  };

  render() {
    const { data, currentPage, nextPage, previousPage } = this.state;
    const characters = data[currentPage - 1];
    return (
      <div>
        {characters && characters.length > 0 ? (
          <div>
            <div className="row row-cols-1 row-cols-md-3">
              {characters.map((character) => {
                const { id, name, birth_year, gender } = character;
                return (
                  <div key={id} className="col mb-4">
                    <FadeIn duration="5">
                      <div className="card h-100 border-0">
                        <img
                          src={this.getRandomImage()}
                          className="card-img-top"
                          alt="Character"
                        />
                        <div className="card-body text-white card-dark">
                          <h5 className="card-title">{name}</h5>
                          <p className="card-text">
                            <span className="font-weight-bold">
                              Birth year:
                            </span>{" "}
                            {birth_year}
                          </p>
                          <p className="card-text">
                            <span className="font-weight-bold">Gender:</span>{" "}
                            {gender === "n/a" ? "robot" : gender}
                          </p>
                          <Link
                            to={`/characters/${id}`}
                            className="d-flex justify-content-end align-items-center link-text"
                          >
                            Read more
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="ml-2"
                            />
                          </Link>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                );
              })}
            </div>
            <div className="d-flex justify-content-center pt-3">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-view-more"
                  disabled={!previousPage}
                  onClick={() => this.handlePreviousPageClick()}
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={!nextPage}
                  className="btn btn-view-more"
                  onClick={() => this.handleNextPageClick()}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="">
            <Spinner />
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(CharacterList);
