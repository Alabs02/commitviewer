// STYLES
import "./Repo.scss";

import { Fragment } from "react";

const Repo = ({ name }) => {
  return (
    <Fragment>
      <div className="repo">
        <span className="fw-semi-bold">{name}</span>
      </div>
    </Fragment>
  );
}

export default Repo;