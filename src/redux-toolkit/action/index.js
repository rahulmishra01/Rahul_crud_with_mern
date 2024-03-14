import axios from "axios";
export const createData = (newData) => async (dispatch) => {
  try {
    dispatch({ type: "createDataRequest" });
    const { data } = await axios.post(
      "http://localhost:4500/api/post",
      newData
    );
    dispatch({ type: "createDataSuccess", payload: data.data });
  } catch (error) {
    dispatch({ type: "createDataFail", error: error.message });
  }
};

export const getData = () => async (dispatch) => {
  try {
    dispatch({ type: "getDataRequest" });
    const { data } = await axios.get("http://localhost:4500/api/get/");
    dispatch({ type: "getDataSuccess", payload: data.data });
  } catch (error) {
    dispatch({ type: "getDataFail", error: error.message });
  }
};
// single data
export const getSingle = (id) => async (dispatch) => {
  try {
    dispatch({ type: "singleDataRequest" });
    const { data } = await axios.get(`http://localhost:4500/api/single/${id}`);
    dispatch({ type: "singleDataSuccess", payload: data.data });
  } catch (error) {
    dispatch({ type: "singleDataFail", error: error.message });
  }
};
// update data
export const updateData = (id, newData) => async (dispatch) => {
  try {
    dispatch({ type: "updateDataRequest" });
    const { data } = await axios.put(
      `http://localhost:4500/api/update/${id}`,
      newData
    );
    dispatch({ type: "updateDataSuccess", payload: data.data });
  } catch (error) {
    dispatch({ type: "updateDataFail", error: error.error });
  }
};
// delete data
export const deleteData = (_id) => async (dispatch) => {
  try {
    dispatch({ type: "deleteDataRequest" });
    const { data } = await axios.delete(
      `http://localhost:4500/api/delete/${_id}`
    );
    dispatch({ type: "deleteDataSuccess", payload: data.message });
  } catch (error) {
    dispatch({ type: "deleteDataFail", error: error.message });
  }
};
