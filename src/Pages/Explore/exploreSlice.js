import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import useClient from "../../Services/Hooks/useClient";

const initialState = {
   playLists: [],
   songs: []

};

const exploreSlice = createSlice({
   name: "explore",
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getPlayLists.fulfilled, (state, action) => {
            if (action.payload) {
               state.playLists = action.payload;
            }
         })
         .addCase(getSongsNew.fulfilled, (state, action) => {
            if (action.payload) {
               state.songs = action.payload;
            }
         })
   },
});


export const getPlayLists = createAsyncThunk(
   "explore/getPlayListsYoung",
   async () => {
      const client = useClient();
      const res = await client.get(client.lists);
      if (res.response.ok) {
         const data = res.data;
         return data;
      }
      return false;
   }
);

export const getSongsNew = createAsyncThunk(
   "explore/getSongsNew",
   async () => {
      const client = useClient();
      const res = await client.get(client.songs + "?_page=1&_limit=9");
      if (res.response.ok) {
         const data = res.data;
         return data;
      }
      return false;
   }
);


export const exploreReducer = exploreSlice.reducer;

export const exploreActions = exploreSlice.actions;

export const exploreSelector = (state) => state.explore;
