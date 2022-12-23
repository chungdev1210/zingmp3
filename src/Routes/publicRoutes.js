//Cấu hình public route
import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import Login from "../Pages/Auth/Login";
import Logout from "../Pages/Auth/Logout";
import Register from "../Pages/Auth/Register";
import CategoryDetail from "../Pages/Categories/CategoryDetail";
export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} end />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/register" element={<Register />} />
    <Route path="/hub" element={<Categories />}>
    </Route>
    <Route path="/detail" element={<CategoryDetail />} />
  </>
);
