import css from './Contact.module.css';
import { ImPhone, ImUser  } from "react-icons/im";



const Contact = ({ id, name, number, deleteContacts }) => (
  <li className={css.contact}>
    <p> < ImUser size="16"/> {name}</p>
    <p> < ImPhone size="16"/> {number}</p>
    <button className={css.deleteBtn} onClick={() => deleteContacts(id)}>Delete</button>
  </li>
);

export default Contact;

