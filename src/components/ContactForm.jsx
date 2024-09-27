import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactFormStyle.css';

const ContactForm = () => {
  const formRef = useRef();  // Create a ref for the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_232iqku', 'template_x0ob2wv', formRef.current, 'Zkluu3n5RxCJUxnnc')
      .then((result) => {
          console.log('Success:', result.text);
          alert('Email sent successfully!');
      }, (error) => {
          console.error('Error:', error.text);
          alert('An error occurred while sending email: ' + error.text);
      });

    // Reset form after submit
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="form">
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label>Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <label>Message</label>
        <textarea
          rows="6"
          name="message"
          placeholder="Type your message here"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
