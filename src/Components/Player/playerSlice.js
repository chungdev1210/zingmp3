import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   playStatus: "pause",
   elementActive: "body",
   idItemPlaying: 0,
   dataItemPlaying: {},
   nextStatus: false,
   previousStatus: false,
};

const playerSlice = createSlice({
   name: "player",
   initialState: initialState,
   reducers: {
      doPlay: (state, action) => {
         state.playStatus = action.payload;
      },
      doActiveElement: (state, action) => {
         state.elementActive = action.payload;
      },
      doIdItemPlaying: (state, action) => {
         state.idItemPlaying = action.payload;
      },
      doItemPlaying: (state, action) => {
         state.dataItemPlaying = action.payload;
      },
      doNext: (state, action) => {
         state.nextStatus = action.payload;
      },
      doPrevious: (state, action) => {
         state.previousStatus = action.payload;
      },
   },
});


export const playerReducer = playerSlice.reducer;
export const playerActions = playerSlice.actions;
export const playerSelector = (state) => state.player;
