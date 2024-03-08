import React, { useState } from "react";
import styles from '../styles/Home.module.css'
import Swal from 'sweetalert2'
import { ThreeDots } from "react-loader-spinner";
import { IoSend } from "react-icons/io5";

export default function ContactForm() {
  const [success, setSuccess] = useState<boolean>(false);
  const [processing, setProcessing] = useState(false);
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
    })
    .then(() => setQuery({ name: "", email: "", message: "" }))
    setProcessing(true);
    Swal.fire( 'sent!','Thanks for contacting Brian','success');
    setProcessing(false);
  

  };
  return (
    <div className="contactForm__container">
      
      <form onSubmit={formSubmit} className="contactForm">
      <div className="mb-3">
  <label htmlFor="name" className="contactForm__name">
     Name{" "}
     <span aria-hidden className=''>
    *
  </span>
  </label><br />
 
  <input
  type="text"
  name="name"
  id="contactForm__name"
  required
  placeholder="Name"
  className="contactForm__name"
  value={query.name}
  onChange={handleParam()}
    />

</div>
<div className="mb-3">
<label htmlFor="contactForm__email">
  Email{" "}
  <span aria-hidden className=''>
    *
  </span>
</label>
  <input
  type="email"
  name="email"
  required
  placeholder="Email"
  className="form-control"
  value={query.email}
  onChange={handleParam()}
/>

</div>
<div className="mb-3">
 
<label htmlFor="contactForm__message">
  Message{" "}
  <span aria-hidden className=''>
    *
  </span>
</label>
  <textarea
   className="contactForm__message"
   id="contactForm__message"
    name="message" 
    rows={5}
    placeholder="Type your message here..."
      value={query.message} 
       onChange={handleParam()}
        >
          </textarea>
          
</div>

{success && <p><b>Message sent successfully</b></p>}

        <button type="submit" >Send
        {processing ? (
            <ThreeDots
              height="15"
              width="20"
              radius="9"
              color="var(--loading)"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              visible={true}
            />
          ) : (
            <IoSend />
          )}
        </button>
      </form>
    </div>
  );
}