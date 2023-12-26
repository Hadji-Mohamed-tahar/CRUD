import React, { useState } from "react";
import "./Update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function Update() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const handelSubmit = (event) => {
    event.preventDefault();
    axios
      .put("http://localhost:8081/Update/"+id, { name, phone, email })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <div className="container">
      <div className="AddStudents">
        <h1>Update Students</h1>
        <Link to="/" className="backButton">
          Back
        </Link>
        <div className="formS">
          <form onSubmit={handelSubmit}>
            <input
              type="text"
              placeholder="Update Username"
              required=""
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="tel"
              placeholder="Update phone"
              required=""
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <input
              type="email"
              placeholder="Update email"
              required=""
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input type="submit" Value="Update" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Update;
