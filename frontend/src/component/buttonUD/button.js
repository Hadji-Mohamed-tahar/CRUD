import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./button.css";
import React from "react";
import axios from "axios";
function ButtonUD({id}) {
  const navigate = useNavigate();
  const handelDelete = (id)=>{
    axios.delete("http://localhost:8081/Delete/"+id)
    .then((res) => {
      // navigate("/");
    })
    .catch((err) => console.log(err))
  };

  return (
    <div className="button">
          <Link to={`/Update/${id}`} className="buttonU">Update</Link>
          <Link onClick={(e)=>{handelDelete(id)}} className="buttonD">Delete</Link>
    </div>
  );
}

export default ButtonUD;
