// STYLES
import "./SearchCommit.scss";

import { Fragment } from "react";
import { AppBar } from "../../../components/navigation";
import { SearchForm } from "../../../components/forms";
import { Repo } from "../../../components/core";

const SearchCommit = () => {

  const repos = [
    'django/django',
    'django/django',
    'django/django',
    'django/django',
  ];

  const renderRepos = () => {
    return repos.map((repo, index) => (
      <Repo key={index} name={repo} />
    ));
  }

  return (
    <Fragment>
      <div className="search-commit">
        <AppBar />

        <main className="main">
          <header className="main__header">
            <div className="main__heading fw-semi-bold text-navy">
              Discover the<br />
              world of code
            </div>

            <div className="main__subheading fw-normal text-navy">
              Explore open source projects from GitHub, and<br /> read their commit history to see the story of how<br /> they were built.
            </div>
          </header>

          <SearchForm />

          <div className="main__copy mt-32 mb-40 w-full">
            <p className="text-navy-dark fw-normal">or pick one of these</p>
            <p className="text-navy-dark fw-normal">suggested repo</p>
          </div>

          {/* TRENDING REPOS */}
          <div className="main__repo-wrapper">
            <div className="main__repos">
              {renderRepos()}
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default SearchCommit;