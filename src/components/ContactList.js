import React from "react";
import { CardContact } from "./ContactCard";

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

  return <div className="ui celled list">{renderContactList}</div>;
};
