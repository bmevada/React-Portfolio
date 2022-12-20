//Add contact function

import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

//Set up a contact form using an empty string
function Contact() {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    // Set default beghviour of page
    //Ensure a name is added; email is valid and message content are added to the query
    const handleFormSubmit = (e) => {
        e.preventDefault(); å

        if (!validateEmail(email) || !userName) {
            setErrorMessage("Enter valid email address");

            return;

        }

        if (!setMessage(message)) {
            setErrorMessage(`Please add a message.`);
            return;
        }

        //If all entries are completed then submit query form
        setUserName("");
        setMessage("");
        setEmail("");
    };

    return (
        <section id="reach-out" className="contact">
            <div className="flex-row">
                <h2 className="section-title secondary-border">Contact Me</h2>
            </div>

            <div className="contact-info">
                <div>
                    <h3>Hello {userName}</h3>
                    <p>You can contact me via:</p>
                    <address>
                        <br />
                        Phone: <a href="tel:+61 424 764 833">+61 424 764 833</a>
                        <br />
                        Email:{" "}
                        <a href="mailto://mevada87@gmail.com">
                            mevada@gmail.com
                        </a>
                    </address>
                    <p>
                        <strong>I look forward to hearing from you!</strong>
                    </p>
                </div>

                {/* contact form section  */}
                <div className="contact-form">
                    <h3>Contact Me</h3>
                    <form className="form">
                        {/* Name */}
                        <label for="contact-name">Your Name</label>
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            id="contact-name"
                            placeholder="Your Name"
                        />

                        {/* Email */}
                        <label for="contact-email">Your Email</label>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            id="contact-email"
                            placeholder="Your Email"
                        />

                        {/* Message */}
                        <label for="contact-message">Message</label>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="message"
                            id="contact-message"
                            placeholder="Add Message"
                        />
                        <button type="button" onClick={handleFormSubmit}>
                            Submit
                        </button>
                    </form>
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Contact;