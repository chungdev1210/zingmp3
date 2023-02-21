import { configureStore } from "@reduxjs/toolkit";
import { playerReducer } from "../../Components/Player/playerSlice";
import { authReducer } from "../../Pages/Auth/authSlice";
import { exploreReducer } from "../../Pages/Explore/exploreSlice";

const rootReducer = {
   player: playerReducer,
   auth: authReducer,
   explore: exploreReducer,
};

export const store = configureStore({
   reducer: rootReducer,
});
