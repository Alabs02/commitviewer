// STYLES
import "./SearchForm.scss";

import { Fragment } from "react";
import { BsSearch } from "react-icons/bs";

const SearchForm = () => {
  return (
    <Fragment>
      <div className="search-form">
        <div className="search-form__container">
          <input
            type="text"
            className="search-form__input"
            placeholder="Eg. facebook/react"
          />
          <BsSearch className="search-form__icon" color="#18214d" size={16} />
        </div>

        <div className="search-form__action">
          <button className="btn btn-secondary">See Commits 🚀</button>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchForm;