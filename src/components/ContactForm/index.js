import {useRef, useState, useContext} from 'react'
import { ContactsContext } from '../../context/contactsContext'


function ContactForm(props){
    const contactsCtx = useContext(ContactsContext)
    const {addNewContact} = contactsCtx
    // const {addNewContact} = props

    const[formData, setFormData] = useState({
        name : '',
        email: '',
        phone: '',
    })

    // const nameRef = useRef('')
    // const emailRef = useRef('')
    // const phoneRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()

        // const newContact = {
        //     name: nameRef.current.value,
        //     email : emailRef.current.value,
        //     phone : phoneRef.current.value
        // }
        const newContact = {...formData, id: new Date()}
        addNewContact(newContact)
        setFormData({
            name : '',
            email: '',
            phone: '',
        })
       

    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    return (
        <div>
            <h2>Create New Contact</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type='text' value={formData.name} onChange=
                    {handleChange} name='name'></input>
                    {/* <input type='text' ref={nameRef}/> */}
                </div>

                <div>
                    <label>Email: </label>
                    <input type='text' value={formData.email} onChange=
                    {handleChange} name='email'></input>
                    {/* <input type='text' ref={emailRef}/> */}
                </div>

                <div>
                    <label>Phone: </label>
                    <input type='text' value={formData.phone} onChange=
                    {handleChange} name='phone'></input>
                    {/* <input type='text' ref={phoneRef}/> */}
                </div>

                <button>Create </button>
            </form>

        </div>
    )
}


export default ContactForm;