import React from "react";
import { CardContact } from "./ContactCard";
import { Link, Outlet } from "react-router-dom";
export const ContactList = (props) => {
  //   console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };


  const renderContactList = props.contacts.map((contact) => {
    return (
      <CardContact
        contacts={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div>
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right floated"> Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
      
    </div>
  );
};
