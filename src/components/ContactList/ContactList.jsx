import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items) || []; // Запобігає помилці
  if (!contacts || contacts.length === 0) {
    return <p>No contacts found.</p>; // Заглушка, якщо масив порожній
  }
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {contact.name}: {contact.number}
          <button onClick={() => handleDelete(contact.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
