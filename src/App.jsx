import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ContactList from "./components/ContactList/ContactList.jsx";
import SearchBox from "./components/SearchBox/SearchBox.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";

function App() {
  const contactsData = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  const filtered = contactsData.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const addContact = (newContact) => {
    dispatch({ type: "ADD_CONTACT", payload: newContact });
  };

  const handleDelete = (myId) => {
    dispatch({ type: "DELETE_CONTACT", payload: myId });
  };

  const handleFilterChange = (newFilter) => {
    dispatch({ type: "SET_FILTER", payload: newFilter });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contactsData={filtered} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
