// STYLES
import "./SearchFormNav.scss";

import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const SearchFormNav = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const getCommits = () => {
    if (query.length > 0) {
      let strArray = query.split("/");

      if (strArray.length === 2) {
        navigate(`/details/${query}/commits`);
      } else {
        alert('Invlaid repository name!');
      }
    } else {
      alert("Repository name is required!");
    }
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
          <button onClick={getCommits} className="btn btn-secondary">See Commits 🚀</button>
        </div>
      </div>
    </Fragment>
  );
}

export default SearchFormNav;