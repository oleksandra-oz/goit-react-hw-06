import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const contactsData = useSelector((state) => state.contacts.items);
  const state = useSelector((state) => state);
  console.log("FULL STATE:", state);
  const filteredContacts = useSelector((state) => state.filter.search);
  const filtered = contactsData?.filter((contact) =>
    contact.name.toLowerCase().includes(filteredContacts.toLowerCase())
  );

  if (!contactsData || contactsData.length === 0) {
    return <p>No contacts found.</p>; // Заглушка, якщо масив порожній
  }
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {filtered.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
