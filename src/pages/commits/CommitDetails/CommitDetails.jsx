// STYLES
import "./CommitDetails.scss";

import React, { Fragment, useState, useEffect } from "react";
import { AppToolBar } from "../../../components/navigation";
import { Commit } from "../../../components/core";
import { useParams } from "react-router-dom";
import { ServiceApi } from "../../../services";
import { CSSTransition } from "react-transition-group";
import "animate.css";

const $api = new ServiceApi();

const CommitDetails = () => {

  const {owner, repo} = useParams();
  const [query, setQuery] = useState("");
  const [commits, setCommits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, updateState] = useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const isEmpty = () => {
    if (Array.isArray(commits) && commits.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  const getCommits = async (url) => {
    setIsLoading(true);
    const response = await $api.fetch(
      `/repos/${url}/commits`
    );

    if (response) {
      setCommits(commits => [...commits, ...response]);
    }
    console.log('responsee: ', response);

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }

  const renderCommits = () => {
    return commits.map((commit, index) => (
      <Commit key={index} commit={commit} />
    ));
  }

  useEffect(() => {
    getCommits(`${owner}/${repo}`);
    forceUpdate();
  }, [query, owner, repo, forceUpdate]);

  return (
    <Fragment>
      <div className="commit-details w-full h-full">
        <AppToolBar query={query} setQuery={setQuery} getCommits={getCommits} />

        <main className="main-details">
          <div className="main-details__title text-navy fw-semi-bold mb-32 mt-15">{owner}/{repo}</div>

          {isLoading &&
            <CSSTransition
              classNames={{
                enterActive: 'animate__animated animate__fadeIn',
                exitActive: 'animate__animated animate__fadeOut',
              }}
              timeout={900}
            >
              <div className="main-details__text fw-normal text-navy animate__animated animate__fadeIn">Loading...</div>
            </CSSTransition>
          }

          {!isLoading && !isEmpty() &&
            <CSSTransition
              classNames={{
                enterActive: 'animate__animated animate__fadeIn',
                exitActive: 'animate__animated animate__fadeOut',
              }}
              timeout={900}
            >
              <div className="w-full h-full animate__animated animate__fadeIn">
                {renderCommits()}
              </div>
            </CSSTransition>
          }

          {isEmpty() && !isLoading &&
            <CSSTransition
              classNames={{
                enterActive: 'animate__animated animate__fadeIn',
                exitActive: 'animate__animated animate__fadeOut',
              }}
              timeout={900}
            >
              <div className="w-full text-navy fw-bold main-details__msg animate__animated animate__fadeIn">
                No Commits or Invalid Repository...
              </div>
            </CSSTransition>
          }
        </main>
      </div>
    </Fragment>
  );
}

export default CommitDetails;