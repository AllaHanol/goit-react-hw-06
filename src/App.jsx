
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import './App.css';

  const App = () => {

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
        
      </>
    );
  };

export default App;

