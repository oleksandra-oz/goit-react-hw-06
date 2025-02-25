
const Contact = ({ name, number, id,  handleDelete
 }) => {
    return (
        <div>
      <ul>
        <li>Name: {name}</li>
        <li>Number: {number}</li>
          <button
            type='button'
            onClick={() => handleDelete(id)}>Delete</button>
      </ul>
    </div>
    );
};

export default Contact;