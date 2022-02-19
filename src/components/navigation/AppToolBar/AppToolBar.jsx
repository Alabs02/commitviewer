// STYLES
import "./AppToolBar.scss";

import { Fragment } from "react";
import { SearchFormNav } from "../../forms";

const AppToolBar = () => {
  

  return (
    <Fragment>
      <div className="app-toolbar">
        <div className="app-toolbar__body">
          <div className="app-toolbar__brand fw-bold">CommitViewer</div>
          <SearchFormNav />
        </div>
      </div>
    </Fragment>
  );
}

export default AppToolBar;