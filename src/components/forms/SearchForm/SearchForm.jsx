// STYLES
import "./SearchForm.scss";

import { Fragment, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

const SearchForm = () => {
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
      <CSSTransition
        classNames={{
          enterActive: 'animate__animated animate__fadeIn',
          exitActive: 'animate__animated animate__fadeOut',
        }}
        timeout={500}
      >
        <div className="search-form">
          <div className="search-form__container">
            <input
              value={query}
              type="text"
              className="search-form__input"
              placeholder="Eg. facebook/react"
              onChange={(e) => setQuery(e.target.value)}
            />
            <BsSearch className="search-form__icon" color="#18214d" size={16} />
          </div>

          <div className="search-form__action">
            <button onClick={getCommits} className="btn btn-secondary">See Commits 🚀</button>
          </div>
        </div>
      </CSSTransition>
    </Fragment>
  );
}

export default SearchForm;