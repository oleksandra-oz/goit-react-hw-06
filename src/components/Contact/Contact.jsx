import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <ul>
        <li>Name: {name}</li>
        <li>Number: {number}</li>
      </ul>
    </div>
  );
};

export default Contact;
