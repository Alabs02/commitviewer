// STYLES
import "./SearchFormNav.scss";

import { Fragment } from "react";
import { BsSearch } from "react-icons/bs";

const SearchFormNav = () => {
  return (
    <Fragment>
      <div className="search-form-nav">
        <div className="search-form-nav__container">
          <input
            type="text"
            className="search-form-nav__input"
            placeholder="Eg. facebook/react"
          />
          <BsSearch className="search-form-nav__icon" color="#18214d" size={16} />
        </div>

        <div className="search-form-nav__action">
          <button className="btn btn-secondary">See Commits 🚀</button>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchFormNav;