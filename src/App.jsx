
import { useState, useEffect } from 'react'
import './App.css'
import ContactList from "./components/ContactList/ContactList.jsx"
import SearchBox from "./components/SearchBox/SearchBox.jsx"
import ContactForm from './components/ContactForm/ContactForm.jsx';



function App() {

  const [contactsData, setContactsData] = useState(() => {
    const savedContacts = window.localStorage.getItem('saved-contacts');

    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }

    return [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('saved-contacts', JSON.stringify(contactsData));
  }, [contactsData]);

  const filtered = contactsData.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));
const addContact = (newContact) => {
  setContactsData((prevContacts) => {
    return [...prevContacts, newContact];
  });
};
  
const handleDelete = (myId) => {
    setContactsData(contactsData.filter(contact => contact.id !== myId));
    };
  
  return (
    <>
      <div>
  <h1>Phonebook</h1>
        <ContactForm onAdd={addContact} />
  <SearchBox value={filter} onChange={setFilter} />
  <ContactList contactsData={filtered} handleDelete={handleDelete} />
</div>

    </>
  )
}

export default App
