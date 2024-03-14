import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createData } from "../redux/action";

const Post = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

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
    dispatch(createData(newData)).then(() => {
      navigate("/");
      setData({
        name: "",
        email: "",
        password: "",
      });
    });
  };

  return (
    <div>
      <Link to="/">Get</Link>
      <form onSubmit={submitHandler}>
        <div>
          <p>Name:-</p>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Enter Name here"
            onChange={changeHandler}
          />
        </div>
        <div>
          <p>Email:-</p>
          <input
            type="text"
            name="email"
            value={data.email}
            placeholder="Enter Email here"
            onChange={changeHandler}
          />
        </div>
        <div>
          <p>Password:-</p>
          <input
            type="text"
            name="password"
            value={data.password}
            placeholder="Enter Password here"
            onChange={changeHandler}
          />
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Post;
