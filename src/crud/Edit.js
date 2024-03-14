import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getSingle, updateData } from "../redux/action";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.data.data);

  const getSingleUser = () => {
    dispatch(getSingle(id));
  };

  useEffect(() => {
    getSingleUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setData({
      name: selector ? selector.name : "",
      email: selector ? selector.email : "",
    });
  }, [selector]);

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newData = data;
    dispatch(updateData(id, newData)).then(() => {
      navigate("/")
    })
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <p>Name:-</p>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>
        <div>
          <p>Email:-</p>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
