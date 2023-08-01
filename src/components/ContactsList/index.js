import {useState, useEffect} from 'react'
import ContactItem from "../ContactItem"

function ContactsList(props){
    const [contacts, setContacts] = useState(null)

    useEffect( () => {
        const fetchData = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json()
            setContacts(data)
        }
        fetchData()
    },[])

    return(
        <div>
            <h2>Contacts List</h2>

            <>
                {contacts ? (
                    contacts.map(contact => <ContactItem name={contact.name} />)
                ): <h3>No contacts found</h3>

                }
            
            </>

        </div>
    )
}


export default ContactsList;