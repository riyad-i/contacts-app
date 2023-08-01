
function ContactForm(props){
    return (
        <div>
            <h2>Create New Contact</h2>

            <form>
                <div>
                    <label>Name: </label>
                    <input type='text'/>
                </div>

                <div>
                    <label>Email: </label>
                    <input type='text'/>
                </div>

                <div>
                    <label>Phone: </label>
                    <input type='text'/>
                </div>
            </form>

        </div>
    )
}


export default ContactForm;