import Contact from "../Contact/Contact.jsx";

const ContactList = ({ contactsData, handleDelete }) => {

    return (
      <ul>
          {contactsData.map((contact) => {
            return (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              handleDelete={handleDelete}
            />
          )
          })}
      </ul>

    );

}

export default ContactList;