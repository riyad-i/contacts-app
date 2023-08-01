import styles from './Main.module.css'
import ContactsList from '../ContactsList';
import ContactForm from '../ContactForm';
import {useState, useEffect} from 'react'


function Main(props){
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
        <main className={styles.container}>
            <section className={styles.sec1}>
                <ContactsList contacts={contacts}/>
            </section>

            <section className={styles.sec2}>
                <ContactForm addNewContact={addNewContact}/>
            </section>
        </main>
    )
}






export default Main;