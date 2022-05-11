import React from "react";
import user from "../images/user.png";

export const CardContact = (props) => {
  // use destructuring for props.contact
  const { id, name, email, age } = props.contacts;

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">Name: {name}</div>
        <div>Email: {email}</div>
        <div>Age: {age}</div>
      </div>
      <i
        className="trash alternate outline icon right floated size large"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
        
      ></i>
    </div>
  );
};
