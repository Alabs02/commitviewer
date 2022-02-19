// STYLES
import "./SearchFormNav.scss";

import { Fragment } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchFormNav = ({ query, setQuery, getCommits }) => {
  const navigate = useNavigate();
  const fetchCommits = () => {
    navigate(`/details/${query}/commits`);
    getCommits(query);
  }
  return (
    <Fragment>
      <div className="search-form-nav">
        <div className="search-form-nav__container">
          <input
            value={query}
            type="text"
            className="search-form-nav__input"
            placeholder="Eg. facebook/react"
            onChange={(e) => setQuery(e.target.value)}
          />
          <BsSearch className="search-form-nav__icon" color="#18214d" size={16} />
        </div>

        <div className="search-form-nav__action">
          <button onClick={fetchCommits} className="btn btn-secondary">See Commits 🚀</button>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchFormNav;