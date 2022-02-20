// STYLES
import "./Repo.scss";

import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "animate.css";

const Repo = ({ repo }) => {
  const navigate = useNavigate();

  const repoName = () => {
    let arr = repo?.full_name?.split("/");
    return arr[arr?.length - 1];
  }

  const goToCommit = () => {
    navigate(`/details/${repo?.owner?.login}/${repoName()}/commits`)
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
        <div onClick={() => goToCommit()} className="repo animate__animated animate__fadeIn">
          <span className="fw-semi-bold">{repo?.full_name}</span>
        </div>
      </CSSTransition>
    </Fragment>
  );
}

export default Repo;