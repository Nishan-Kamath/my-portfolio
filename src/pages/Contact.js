import React, {useState} from "react";
import "../App.css";



function Contact(){
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name===""||contact===""||message===""){
            setSuccess("Please fill all the fields!");
            return;
        }else{
            setSuccess("Message submitted successfully!");
        }
    }

    return(
        <div className="page contact-page">
            <h1>Contact Me</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

                <label>Contact Number</label>
                <input type="text" value={contact} onChange={(e)=>setContact(e.target.value)}/>

                <label>Contact Number</label>
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>

                <button type="submit">submit</button>
            </form>
            <p className="success-msg">{success}</p>
        </div>
    )
}

export default Contact;