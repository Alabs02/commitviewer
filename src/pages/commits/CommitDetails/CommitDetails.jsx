// STYLES
import "./CommitDetails.scss";

import React, { Fragment, useState, useEffect } from "react";
import { AppToolBar } from "../../../components/navigation";
import { Commit } from "../../../components/core";
import { useParams } from "react-router-dom";
import { ServiceApi } from "../../../services";

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
          <div className="main-details__title text-navy fw-semi-bold mb-32">{owner}/{repo}</div>

          {isLoading && <div className="main-details__text fw-normal text-navy">Loading...</div>}

          {!isLoading && !isEmpty() &&
            <div className="w-full h-full">
              {renderCommits()}
            </div>
          }
          {isEmpty && !isLoading &&
            <div className="w-full text-navy fw-bold main-details__msg">
              No Commits or Invalid Repository...
            </div>
          }
        </main>
      </div>
    </Fragment>
  );
}

export default CommitDetails;