import {useRef} from 'react'

function ContactForm(props){
    const {addNewContact} = props

    const nameRef = useRef('')
    const emailRef = useRef('')
    const phoneRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const newContact = {
            name: nameRef.current.value,
            email : emailRef.current.value,
            phone : phoneRef.current.value
        }

        console.log(newContact);
        addNewContact(newContact)
    }

    return (
        <div>
            <h2>Create New Contact</h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input type='text' ref={nameRef}/>
                </div>

                <div>
                    <label>Email: </label>
                    <input type='text' ref={emailRef}/>
                </div>

                <div>
                    <label>Phone: </label>
                    <input type='text' ref={phoneRef}/>
                </div>

                <button>Create </button>
            </form>

        </div>
    )
}


export default ContactForm;