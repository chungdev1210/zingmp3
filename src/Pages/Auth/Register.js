import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Auth.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import useClient from "../../Services/Hooks/useClient";
import { getUser } from "./authSlice";
import { useDispatch } from "react-redux";

function Register(props) {

   const client = useClient();
   const navigate = useNavigate();
   const dispatch = useDispatch();


   const [form, setForm] = useState({
      name: '',
      email: '',
      password: ''
   })

   const handleSubmit = (e) => {
      e.preventDefault();
      const { name, email, password } = form;

      const data = {
         name: name,
         email: email,
         password: password,
      };
      postUser(data)
   }

   const handleChange = (e) => {
      const data = { ...form }
      data[e.target.name] = e.target.value;
      setForm(data)
   }

   const postUser = async (data) => {
      const res = await client.post(client.register, data)
      if(res.response.ok) {
         const dataLogin = {
            token: res.data.accessToken,
            userId: res.data.user.id,
         };
         localStorage.setItem("login", JSON.stringify(dataLogin));

         dispatch(getUser());
         toast.success("Đăng ký thành công");
         navigate('/')
      } else {
         toast.error('Email bị trùng. Vui lòng kiểm tra lại !!!')
      }
   }

   return (
      <div className="register">
         <h1>Đăng kí tài khoản</h1>
         <form onSubmit={handleSubmit}>
            <div className="form-group">
               <label>Name</label>
               <input
                  type="text"
                  name="name"
                  placeholder="Fullname..."
                  onChange={handleChange}
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
                  onChange={handleChange}
               />
            </div>
            <div className="form-group">
               <label>Password</label>
               <input
                  type="password"
                  name="password"
                  placeholder="Password..."
                  onChange={handleChange}
                  required
               />
            </div>
            <button type="submit">Đăng ký</button>
         </form>
         <ToastContainer />
      </div>
   );
}

Register.propTypes = {};

export default Register;
