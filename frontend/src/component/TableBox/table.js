import React, { useEffect, useState } from "react";
import "./table.css";
import ButtonUD from "../buttonUD/button";
import ButtonS from "../button/button";
import axios from "axios";
import { Link } from "react-router-dom";
function Table() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8081")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);

  return (
    <div className="boxHome">
      <div className="title">
        <h1>CRUD APP</h1>
        <Link to="/Create"><ButtonS /></Link>
      </div>
      <table>
        <tbody>
          <tr className="LineTr">
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {data.map((d) => {
            return (
              <tr className="LineTr2">
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td>{d.email}</td>
                <td><ButtonUD id={d.id}/></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
