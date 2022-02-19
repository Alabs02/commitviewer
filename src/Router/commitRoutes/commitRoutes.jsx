import { Route } from "react-router-dom";

// PAGES
import {
  SearchCommit,
  CommitDetials,
} from "../../pages/commits";

const commitRoutes = () => {
  return (
    <Route path="/">
      <Route path="" element={<SearchCommit />}></Route>
      <Route path="details/:repoId" element={<CommitDetials />}></Route>
    </Route>
  );
}

export default commitRoutes;