import React from 'react';
import { useForm } from 'react-hook-form';

import '../../Styles/ContactPage.css';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form className="contactForm" onSubmit={handleSubmit(onSubmit)}>
      <input className="textInput" type="text" placeholder="Name" {...register("Name", {required: true, maxLength: 80})} />
      <input className="textInput" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <select {...register("Categories", { required: true })}>
        <option value="Join Technical Team">Join Technical Team</option>
        <option value="Join Executive Team">Join Executive Team</option>
        <option value="Sign Up for an Event">Sign Up for an Event</option>
        <option value="Other Question">Other Question</option>
      </select>
      <textarea className="textInput" id="questionField" type="text" placeholder="Enter Your Question(s) here" {...register("Question", {required: true})} />

      <input id="submitBtn" type="submit" />
    </form>
  );
}

export default ContactForm