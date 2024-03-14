import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../redux-toolkit/action";
const Get = () => {
  const dispatch = useDispatch();
  const selector = useSelector(
    (state) => (state.data.data.length > 0 ? state.data.data : [])
    // state.data.length > 0 ? state.data.data : []
  );

  const getdata = () => {
    dispatch(getData());
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clickHandler = (_id) => {
    dispatch(deleteData(_id))
      .then(() => {
        dispatch(getData());
      })
      .catch(() => {
        console.log("somthing went wrong");
      });
  };

  return (
    <div>
      <Link to="/post">Post</Link>
      <table border="2px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {selector &&
            selector?.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <Link to={`/edit/${item._id}`}>Edit</Link>
                  <Link onClick={() => clickHandler(item._id)}>Delete</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Get;
