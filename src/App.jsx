import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
import { addContact, deleteContact } from "./redux/contactsSlice.js";
import { changeFilter } from "./redux/filtersSlice.js";

function App() {
  const contactsData = useSelector((state) => state.contacts.items);
  const filteredContacts = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filtered =
    contactsData?.filter((contact) =>
      contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
    ) || [];

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDelete = (myId) => {
    dispatch(deleteContact(myId));
  };

  const handleFilterChange = (newFilter) => {
    dispatch(changeFilter(newFilter));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={filteredContacts} onChange={handleFilterChange} />
      <ContactList contactsData={filtered} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
