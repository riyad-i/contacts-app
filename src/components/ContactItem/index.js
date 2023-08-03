import { ContactsContext } from "../../context/contactsContext";
import { useContext } from "react";




function ContactItem(props){
    // console.log(props);
    // const {contact} =props

    const contactsCtx = useContext(ContactsContext)
    // console.log(contactsCtx);
    const {dispatch} = contactsCtx

    const {name, email, phone, id} = props.contact
    return(
        <div>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
            <button onClick={() => dispatch({type : 'delete_contact', payload : id})}>Delete</button>
        </div>
    )
}



export default ContactItem;