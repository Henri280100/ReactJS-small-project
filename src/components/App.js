import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AddContact } from "./AddContact";
import { ContactList } from "./ContactList";
import { Header } from "./Header";
import "./App.css";

function App() {
  //set a key for the localStorage
  const LOCAL_STORAGE_KEY = "contacts";

  // use the useState to insert an array of contacts
  // instead of static object list.
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);

    // use setContact to update the state instead of directly manipulate
    // the contacts
    setContacts([...contacts, contact]);
  };


  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    return () => {
      window.onstorage = () => {
        const retrieveContacts = JSON.parse(
          localStorage.getItem(LOCAL_STORAGE_KEY)
        );
        if (retrieveContacts) setContacts(retrieveContacts);
      };
    };
  }, []);

  // // useEffect will render the component if there are any values which have been changed.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <ContactList
              contacts={contacts} getContactId={removeContactHandler}
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact addContactHandler={addContactHandler} />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
