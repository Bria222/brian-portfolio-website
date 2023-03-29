import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import Swal from 'sweetalert2'
export default function ContactForm() {
  const [success, setSuccess] = useState<boolean>(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Update inputs value
  const handleParam = () => (e: { target: { name: any; value: any; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  // Form Submit function
  const formSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch("https://getform.io/f/11b8a94d-9198-4957-869c-2e72f27c2d18", {
      method: "POST",
      body: formData
    }).then(() => setQuery({ name: "", email: "", message: "" }))
   
    Swal.fire( 'sent!','Thanks for contacting Brian','success');
    ;

  };
  return (
    <div className="contactForm__container">
      
      <form onSubmit={formSubmit}>
      <div className="mb-3">
  <label htmlFor="name" className="form-label">full name</label><br />
  <input
  type="text"
  name="name"
  required
  placeholder="Name"
  className="form-control"
  value={query.name}
  onChange={handleParam()}
    />
<br />
</div>
<div className="mb-3">
  <label htmlFor="email" className="form-label">Email address</label><br />
  <input
  type="email"
  name="email"
  required
  placeholder="Email"
  className="form-control"
  value={query.email}
  onChange={handleParam()}
/>
<br />
</div>
<div className="mb-3">
 
  <br />
  <textarea
   className="form-control"
    name="message" 
     placeholder="Message"
      value={query.message} 
       onChange={handleParam()}
        >
          </textarea>
          
</div>

{success && <p><b>Message sent successfully</b></p>}
<br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}