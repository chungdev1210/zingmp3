import React from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import RouteCore from "../../Services/Routes/RouteCore";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch } from "react-redux";
import { getUser } from "../../Pages/Auth/authSlice";
import { useEffect } from "react";

function Main(props) {
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getUser());
   }, []);
   
   return (
      <div id="app">
         <div className="background"></div>
         <div className="grid">
            <div className="zing">
               <Sidebar />
               <div className="zing-main">
                  <Header />
                  <div className="zing-body">
                     <RouteCore />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

Main.propTypes = {};

export default Main;
