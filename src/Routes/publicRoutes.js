//Cấu hình public route
import { Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Categories from "../Pages/Categories/Categories";
import Login from "../Pages/Auth/Login";
import Logout from "../Pages/Auth/Logout";
import Register from "../Pages/Auth/Register";
import CategoryDetail from "../Pages/Categories/CategoryDetail";
import Playlist from "../Pages/Playlist/Playlist";
export const publicRoutes = (
  <>
    <Route path="/" element={<Home />} end />
    <Route path="/login" element={<Login />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/register" element={<Register />} />
    <Route path="/playlist" element={<Playlist />} />
    <Route path="/hub">
      <Route path="" element={<Categories />} />
      <Route path=":slug--:id.html" element={<CategoryDetail />}></Route>
    </Route>
  </>
);
