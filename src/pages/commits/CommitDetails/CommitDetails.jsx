// STYLES
import "./CommitDetails.scss";

import { Fragment } from "react";
import { AppToolBar } from "../../../components/navigation";
import { Commit } from "../../../components/core";

const CommitDetails = () => {
  return (
    <Fragment>
      <div className="commit-details w-full h-full">
        <AppToolBar />

        <main className="main-details">
          <div className="main-details__title text-navy fw-semi-bold mb-32">microsoft/vscode</div>

          <div className="main-details__text fw-normal text-navy">Loading...</div>

          <Commit />
        </main>
      </div>
    </Fragment>
  );
}

export default CommitDetails;