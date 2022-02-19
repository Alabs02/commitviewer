// STYLES
import "./Repo.scss";

import { Fragment } from "react";

const Repo = ({ repo }) => {
  return (
    <Fragment>
      <div className="repo">
        <span className="fw-semi-bold">{repo?.full_name}</span>
      </div>
    </Fragment>
  );
}

export default Repo;