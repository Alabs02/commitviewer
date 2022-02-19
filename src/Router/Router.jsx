import {
  BrowserRouter,
  Routes,
} from "react-router-dom";

// Routes
import commitRoutes from "./commitRoutes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {commitRoutes()} {/* COMMIT ROUTES */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;