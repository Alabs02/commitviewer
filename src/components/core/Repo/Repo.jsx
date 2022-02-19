// STYLES
import "./Repo.scss";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

const Repo = ({ repo }) => {
  const navigate = useNavigate();

  const repoName = () => {
    let arr = repo?.full_name?.split("/");
    return arr[arr?.length - 1];
  }

  const goToCommit = (owner, repository) => {
    navigate(`/details/${repo?.owner?.login}/${repoName()}/commits`)
  }
  return (
    <Fragment>
      <div onClick={() => goToCommit()} className="repo">
        <span className="fw-semi-bold">{repo?.full_name}</span>
      </div>
    </Fragment>
  );
}

export default Repo;