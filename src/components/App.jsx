import { Component } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    data.id = nanoid();

    const repeatingName = this.state.contacts.find(
      contact => contact.name === data.name
    );

    if (repeatingName) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [...contacts, data],
    }));
  };

  handleDelete = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm formSubmitHandler={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilter={this.handleFilter} />
        <ContactList
          contacts={this.visibleContacts()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}
