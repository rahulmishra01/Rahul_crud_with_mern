import {
  CREATE_DATA_REQUEST,
  CREATE_DATA_SUCCESS,
  CREATE_DATA_FAIL,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAIL,
  SINGLE_DATA_REQUEST,
  SINGLE_DATA_SUCCESS,
  SINGLE_DATA_FAIL,
  UPDATE_DATA_REQUEST,
  UPDATE_DATA_SUCCESS,
  UPDATE_DATA_FAIL,
  DELETE_DATA_REQUEST,
  DELETE_DATA_SUCCESS,
  DELETE_DATA_FAIL,
} from "../action-type";
import axios from "axios";

export const createData = (newData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_DATA_REQUEST });
    const { data } = await axios.post(
      "http://localhost:4500/api/post",
      newData
    );
    dispatch({ type: CREATE_DATA_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: CREATE_DATA_FAIL, error: error.message });
  }
};
export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: GET_DATA_REQUEST });
    const { data } = await axios.get("http://localhost:4500/api/get/");
    dispatch({ type: GET_DATA_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: GET_DATA_FAIL, error: error.message });
  }
};
// single data
export const getSingle = (id) => async (dispatch) => {
  try {
    dispatch({ type: SINGLE_DATA_REQUEST });
    const { data } = await axios.get(`http://localhost:4500/api/single/${id}`);
    dispatch({ type: SINGLE_DATA_SUCCESS, payload: data.data });
  } catch (error) {
    dispatch({ type: SINGLE_DATA_FAIL, error: error.message });
  }
};
// update data
export const updateData = (id, newData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_DATA_REQUEST });
    const { data } = await axios.put(`http://localhost:4500/api/update/${id}`,newData);
    dispatch({type:UPDATE_DATA_SUCCESS, payload:data.data})
  } catch (error) {
    dispatch({ type: UPDATE_DATA_FAIL, error: error.error });
  }
};
// delete data
export const deleteData = (_id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_DATA_REQUEST });
    const { data } = await axios.delete(
      `http://localhost:4500/api/delete/${_id}`
    );
    dispatch({ type: DELETE_DATA_SUCCESS, payload: data.message });
  } catch (error) {
    dispatch({ type: DELETE_DATA_FAIL, error: error.message });
  }
};
