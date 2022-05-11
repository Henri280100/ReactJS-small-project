import React, { Component } from "react";

export class AddContact extends Component {
  state = {
    name: "",
    email: "",
    age: "",
  };

  Add = (e) => {
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    // preventDefault to prevent the form not get the data from the user.
    // whenever the user click the button
    e.preventDefault();
    if (this.state.name === "") {
      alert("Name cannot be empty");
      return;
    }

    if (this.state.email === "") {
      alert("Mail cannot be empty");
      return;
    }

    if (!regex.test(this.state.email)) {
      alert("Please enter a valid email");
      return;
    }

    if (this.state.age === "") {
      alert("Please enter the age field");
      return;
    } else if (this.state.age < 18) {
      alert("Your age is too young");
      return;
    }
   
    // pass object from AddContact component to App component.
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", age: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.Add}>
          <div className=" field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className=" field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <div className=" field">
            <label>Age</label>
            <input
              type="text"
              name="Age"
              placeholder="Age"
              value={this.state.age}
              onChange={(e) => this.setState({ age: e.target.value })}
            />
          </div>
          <button className="ui button blue fixed container">Add</button>
        </form>
      </div>
    );
  }
}
