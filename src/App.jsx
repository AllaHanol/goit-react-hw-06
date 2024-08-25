import { useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
// import initialContacts from './db/contacts.json';

import './App.css';

import { useDispatch, useSelector } from "react-redux";
// import { addContact, deleteContact } from "./redux/contacts/contactsSlice";
import { setFilterValue } from './redux/filter/filtersSlice';


  const App = () => {
    // const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? initialContacts);
    // const [filter, setFilter] = useState('');

    const dispatch = useDispatch();

    const contacts = useSelector((state) => state.profiles.contacts);
    // const showContactList = useSelector((state) => state.profiles.showContactList);
    const filter = useSelector((state) => state.profiles.filter);
  
    useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const addContact = (name, number) => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      dispatch(addContact(newContact));
      // setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const deleteContact = (id) => {
      const action = deleteContact(id);
      dispatch(action);
      
      // setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
    };

    const handleFilterChange = (e) => {
      const value = e.target.value;
      const action = setFilterValue(value);
      dispatch(action);
      // setFilter(e.target.value);
    };

    const getFilteredContacts = useMemo(() => {
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }, [contacts, filter]);

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={addContact} />
        <h2>Contacts</h2>
        <SearchBox filter={filter} onFilterChange={handleFilterChange} />
        <ContactList contacts={getFilteredContacts()} onDeleteContact={deleteContact} />
      </>
    );
  };

export default App;

