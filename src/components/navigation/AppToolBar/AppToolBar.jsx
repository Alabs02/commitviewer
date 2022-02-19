// STYLES
import "./AppToolBar.scss";

import { Fragment, useState } from "react";
import { SearchFormNav } from "../../forms";

const AppToolBar = () => {
  const [isLoading, setIsLoading] = useState(false);

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