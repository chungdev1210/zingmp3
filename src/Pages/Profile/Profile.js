import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Profile.scss";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, getUser } from "../Auth/authSlice";
import useClient from "../../Services/Hooks/useClient";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profile(props) {
   const dispatch = useDispatch();
   const state = useSelector(authSelector);
   const client = useClient();
   const [form, setForm] = useState({
      name: "",
      email: "",
   });
   let { userLogin } = state;

   useEffect(() => {
      const { name, email } = userLogin;
      setForm({
         name,
         email,
      });
   }, []);

   const handleSubmit = (e) => {
      e.preventDefault();
      postUser(form);
   };

   const token = JSON.parse(localStorage.getItem("login")).token;
   const postUser = async (data) => {
      const res = await client.patch(
         client.users + "/" + userLogin.id,
         data,
         {},
         token
      );
      console.log(res);
      if (res.response.ok) {
         dispatch(getUser());
         toast.success("Sửa thành công");
      } else {
         toast.error("Có vấn đề! Vui lòng thử lại");
      }
   };

   const handleChange = (e) => {
      const data = { ...form };
      data[e.target.name] = e.target.value;
      setForm(data);
   };

   const { name, email } = form;

   return (
      <>
         <div className="profile">
            <h2>
               Xin chào: <span>{userLogin.name}</span>
            </h2>
            <form onSubmit={handleSubmit}>
               <div className="form-group">
                  <label>Name</label>
                  <input
                     type="text"
                     name="name"
                     placeholder="Fullname..."
                     onChange={handleChange}
                     value={name}
                     required
                  />
               </div>
               <div className="form-group">
                  <label>Email</label>
                  <input
                     type="email"
                     name="email"
                     placeholder="Email..."
                     required
                     value={email}
                     onChange={handleChange}
                  />
               </div>
               <button type="submit">Cập nhật</button>
            </form>
            <ToastContainer />
         </div>
      </>
   );
}

Profile.propTypes = {};

export default Profile;
