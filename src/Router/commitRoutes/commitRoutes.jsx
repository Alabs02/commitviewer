import { Route } from "react-router-dom";

const commitRoutes = () => {
  return (
    <Route path="commits">
      <Route path=""></Route>
      <Route path="details/:repoId"></Route>
    </Route>
  );
}

export default commitRoutes;