import {useState, useEffect} from 'react'
import Header from './components/Header';
import Navbar from './components/Navbar';
import Main from './components/Main'
import './App.css';
import { ContactsContext } from './context/contactsContext';

function App() {
  const [contacts, setContacts] = useState(null)

    useEffect( () => {
        const fetchData = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setContacts(data)
        }
        fetchData()
    },[])


    const addNewContact = (newContact) => {
        setContacts([...contacts,newContact])
    }

  return (
    <ContactsContext.Provider value={{contacts,addNewContact}}>
      <div className="">
        <Navbar/>
        <Header title="Contacts App"/>
        <Main/>
      </div>
    </ContactsContext.Provider>
  );
}

export default App;
