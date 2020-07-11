import React, { Component } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SearchInput extends Component {
  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend bg-trans">
          <span className="input-group-text" id="basic-addon1">
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          // aria-label="Username"
          // aria-describedby="basic-addon1"
        />
      </div>
    );
  }
}

export default SearchInput;
