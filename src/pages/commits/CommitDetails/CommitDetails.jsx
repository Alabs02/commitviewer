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
  const [isLoading, setIsLoading] = useState(false);

  const getCommits = async () => {
    setIsLoading(true);
    const response = await $api.fetch(
      `/repos/${owner}/${repo}/commits`
    );

    if (response) {
      setCommits(commits => [...commits, ...response]);
    }
    console.log('response: ', response);

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
  }, []);

  return (
    <Fragment>
      <div className="commit-details w-full h-full">
        <AppToolBar />

        <main className="main-details">
          <div className="main-details__title text-navy fw-semi-bold mb-32">{owner}/{repo}</div>

          {isLoading && <div className="main-details__text fw-normal text-navy">Loading...</div>}

          {!isLoading &&
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