// STYLES
import "./Commit.scss";

import { Fragment } from "react";

const Commit = ({ commit }) => {

  return (
    <Fragment>
      <div className="commit">
        <div className="commit__msg text-navy fw-normal mb-16">{commit?.commit?.message}</div>
        <div className="commit__body">
          <div className="commit__content">
            <div className="commit__media">
              <div className="commit__avatar"></div>
              <div className="commit__name fw-semi-bold text-navy">{commit?.commit?.committer.name}</div>
            </div>

            <div className="commit__copy text-navy fw-normal">{commit?.commit?.message}</div>
          </div>

          <div className="commit__action fw-normal">
            {commit?.commit?.committer.date}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Commit;