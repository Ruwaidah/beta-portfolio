import { useState } from "react";
import axios from "axios";
import "./ContactForm.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [errorsInput, setErrorsInput] = useState({});
  const [response, setResponse] = useState(null);
  const { register, handleSubmit, formState, watch, clearErrors } = useForm();
  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post(`${import.meta.env.VITE_APP_URL}`, data)
      .then((response) => {
        setResponse(response.data.message);
      })
      .catch((error) => 
        {
          setResponse(error.response.data.message)});
  };

  const checkError = () => {
    if (Object.keys(errors).length > 0) setErrorsInput(errors);
    clearErrors();
  };
  return (
    <div className="ContactForm">
      {response ? (
        <p className="respond-send-message">{response}</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name-title">
            <h2 className="section-heading">Contact Me</h2>
          </div>
          <p>
            {" "}
            {errorsInput.name
              ? errorsInput.name.message
              : errorsInput.subject
              ? errorsInput.subject.message
              : errorsInput.message
              ? errorsInput.message.message
              : null}
          </p>
          <input
            className={errorsInput.name ? "error" : ""}
            type="text"
            placeholder="Name"
            {...register("name", {
              required: true,
              maxLength: {
                value: 50,
                message: "Name is too long",
              },
              minLength: {
                value: 2,
                message: "Name is too short",
              },
            })}
          />
          <input
            className={errorsInput.subject ? "error" : ""}
            type="text"
            placeholder="Subject"
            {...register("subject", {
              required: true,
              maxLength: {
                value: 50,
                message: "Too long",
              },
              minLength: {
                value: 2,
                message: "Too short",
              },
            })}
          />
          <textarea
            className={
              errorsInput.message ? "error messageInput" : "messageInput"
            }
            placeholder="Type your message here ..."
            {...register("message", {
              required: true,
              maxLength: {
                value: 250,
                message: "Message is too long",
              },
              minLength: {
                value: 10,
                message: "Message is too short",
              },
            })}
          />
          <input value="Send" type="submit" onClick={checkError} />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
