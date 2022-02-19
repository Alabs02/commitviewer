// STYLES
import "./Commit.scss";

import { Fragment } from "react";

const Commit = () => {
  return (
    <Fragment>
      <div className="commit">
        <div className="commit__msg text-navy fw-normal mb-16">Log all errors to console.error by default (#21130)</div>
        <div className="commit__body">
          <div className="commit__content">
            <div className="commit__media">
              <div className="commit__avatar"></div>
              <div className="commit__name fw-semi-bold text-navy">gaeron</div>
            </div>

            <div className="commit__copy text-navy fw-normal">Log all errors to console.error by default (#21130)</div>
          </div>

          <div className="commit__action fw-normal">
            23:30 28/04/2021
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Commit;