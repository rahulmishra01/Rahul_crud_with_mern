import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: false,
};

export const reducerAll = createReducer(initialState, {
  createDataRequest: (state) => {
    state.isLoading = true;
  },
  createDataSuccess: (state, action) => {
    state.isLoading = false;
    state.data = action.payload;
  },
  createDataFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  getDataRequest: (state) => {
    state.isLoading = true;
  },
  getDataSuccess: (state, action) => {
    state.isLoading = false;
    state.data = action.payload;
  },
  getDataFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  singleDataRequest: (state) => {
    state.isLoading = true;
  },
  singleDataSuccess: (state, action) => {
    state.isLoading = false;
    state.data = action.payload;
  },
  singleDataFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  updateDataRequest: (state) => {
    state.isLoading = true;
  },
  updateDataSuccess: (state, action) => {
    state.isLoading = false;
    state.data = action.payload;
  },
  updateDataFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
  deleteDataRequest: (state) => {
    state.isLoading = true;
  },
  deleteDataSuccess: (state, action) => {
    state.isLoading = false;
    state.message = action.payload;
  },
  deleteDataFail: (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  },
});
