import { useDispatch, useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import { contactsArr, deleteContact } from "../../redux/contactsSlice";
import { filterValue } from "../../redux/filtersSlice";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(contactsArr);
  const filter = useSelector(filterValue);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (filteredContacts.length === 0) {
    return;
  }
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <Contact
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContacts={(contactId) => {
            dispatch(deleteContact(contactId));
            }}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
