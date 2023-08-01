
function ContactItem(props){
    // console.log(props);
    // const {contact} =props
    const {name, email, phone} = props.contact
    return(
        <div>
            <h3>{name}</h3>
            <h4>{email}</h4>
            <h4>{phone}</h4>
        </div>
    )
}



export default ContactItem;