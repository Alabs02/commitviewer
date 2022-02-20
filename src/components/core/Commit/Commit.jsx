// STYLES
import "./Commit.scss";

import { Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import "animate.css";

const Commit = ({ commit }) => {

  const formatDate = (dateString) => {
    let date = new Date(dateString);
    let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <Fragment>
      <CSSTransition
        classNames={{
          enterActive: 'animate__animated animate__fadeIn',
          exitActive: 'animate__animated animate__fadeOut',
        }}
        timeout={900}
      >
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
              {formatDate(commit?.commit?.committer.date)}
            </div>
          </div>
        </div>
      </CSSTransition>
    </Fragment>
  );
}

export default Commit;