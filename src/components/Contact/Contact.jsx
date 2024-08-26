import css from './Contact.module.css';
import { ImPhone, ImUser } from "react-icons/im";
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';


const Contact = ({ id, name, number }) => {

  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
  <li className={css.contact}>
    <p> < ImUser size="16"/> {name}</p>
    <p> < ImPhone size="16"/> {number}</p>
    <button className={css.deleteBtn} onClick={handleDelete}>Delete</button>
  </li>
  );
};

export default Contact;

