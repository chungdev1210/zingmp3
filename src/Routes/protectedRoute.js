//Cấu hình protected route
import { Route } from "react-router-dom";
import AuthMiddleware from "../Middlewares/AuthMiddleware";
import AdminMiddleware from "../Middlewares/AdminMiddleware";
import Single from "../Pages/Single/Single";
import Personal from "../Pages/Personal/Personal";

export const protectedRoutes = (
  <>
    <Route path="/mymusic" element={<AuthMiddleware />}>
      <Route path="" element={<Personal />} />
      <Route path="ca-si" element={<AdminMiddleware />}>
        <Route path="" element={<Single />} />
      </Route>
    </Route>
  </>
);
