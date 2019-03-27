import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "111-222-3333"
      },
      {
        id: 2,
        name: "Yizel Doe",
        email: "ydoe@gmail.com",
        phone: "111-112-3333"
      },
      {
        id: 3,
        name: "Brandon Doe",
        email: "bdoe@gmail.com",
        phone: "111-222-3111"
      }
    ]
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(contact => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>
    );
  }
}

export default Contacts;
