// STYLES
import "./SearchFormNav.scss";

import { Fragment } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

const SearchFormNav = ({ query, setQuery, getCommits }) => {

  const navigate = useNavigate();
  const fetchCommits = () => {

    let queryArray = query?.split("/");
    if (queryArray?.length === 2 && query?.length > 0) {
      navigate(`/details/${query}/commits`);
      getCommits(query);
    } else {
      alert("invalid repository name!")
    }
  }

  return (
    <Fragment>
      <CSSTransition
        classNames={{
          enterActive: 'animate__animated animate__fadeIn',
          exitActive: 'animate__animated animate__fadeOut',
        }}
        timeout={500}
      >
        <div className="search-form-nav animate__animated animate__fadeIn">
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
      </CSSTransition>
    </Fragment>
  );
}

export default SearchFormNav;