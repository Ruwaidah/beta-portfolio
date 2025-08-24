import { useEffect, useState } from "react";
import "./ContactForm.css";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [errorsInput, setErrorsInput] = useState({});
  const { register, handleSubmit, formState, watch, clearErrors } = useForm();
  const { errors } = formState;



  const onSubmit = (data) => {
    console.log(data);
  };

  const checkError = () => {
    if (Object.keys(errors).length > 0) setErrorsInput(errors);
    clearErrors();
  };
  console.log(errors);
  console.log(errorsInput);
  return (
    <div className="ContactForm">
      <p>
        {" "}
        {errorsInput.name
          ? errorsInput.name.message
          : errorsInput.email
          ? errorsInput.email.message
          : errorsInput.message
          ? errorsInput.message.message
          : null}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          className={errorsInput.email ? "error" : ""}
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Invalid email",
            },
          })}
        />
        <input
          className={errorsInput.message ? "error" : ""}
          type="text"
          placeholder="Message"
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
    </div>
  );
};

export default ContactForm;
