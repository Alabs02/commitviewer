// STYLES
import "./CommitDetails.scss";

import { Fragment, useState, useEffect } from "react";
import { AppToolBar } from "../../../components/navigation";
import { Commit } from "../../../components/core";
import { useParams } from "react-router-dom";
import { ServiceApi } from "../../../services";

const $api = new ServiceApi();

const CommitDetails = () => {

  const {owner, repo} = useParams();
  const [commits, setCommits] = useState([]);
  const [repoOwner, setRepoOwner] = useState(owner);
  const [repoName, setRepoName] = useState(repo);
  const [isLoading, setIsLoading] = useState(false);

  const isEmpty = () => {
    if (Array.isArray(commits) && commits.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  const getCommits = async () => {
    setIsLoading(true);
    const response = await $api.fetch(
      `/repos/${repoOwner}/${repoName}/commits`
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
    getCommits();
  }, [repoName, repoOwner]);

  return (
    <Fragment>
      <div className="commit-details w-full h-full">
        <AppToolBar />

        <main className="main-details">
          <div className="main-details__title text-navy fw-semi-bold mb-32">{owner}/{repo}</div>

          {isLoading && <div className="main-details__text fw-normal text-navy">Loading...</div>}

          {!isLoading && !isEmpty() &&
            <div className="w-full h-full">
              {renderCommits()}
            </div>
          }
        </main>
      </div>
    </Fragment>
  );
}

export default CommitDetails;