import {useState, useEffect, useContext} from 'react'
import ContactItem from "../ContactItem"
import { ContactsContext } from '../../context/contactsContext'

function ContactsList(props){
    // const contacts = props.contacts
    const contactsCtx = useContext(ContactsContext)
    const {contacts} = contactsCtx
    // const [contacts, setContacts] = useState(null)

    // useEffect( () => {
    //     const fetchData = async() => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users')
    //         const data = await res.json()
    //         setContacts(data)
    //     }
    //     fetchData()
    // },[])

    return(
        <div>
            <h2>Contacts List</h2>

            <>
                {contacts ? (
                    contacts.map(contact => <ContactItem key={contact.id} contact={contact} />) //or {...contact}
                ): <h3>No contacts found</h3>

                }
            
            </>

        </div>
    )
}


export default ContactsList;