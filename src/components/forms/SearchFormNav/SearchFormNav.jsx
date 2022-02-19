// STYLES
import "./SearchFormNav.scss";

import { Fragment } from "react";

const SearchFormNav = () => {
  return (
    <Fragment>
      <div className="search-form">
        <div className="search-form__container">
          <input
            type="text"
            className="search-form__input"
            placeholder="Eg. facebook/react"
          />
        </div>

        <div className="search-form__action">
          <button className="btn btn-secondary">See Commits 🚀</button>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchFormNav;