import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            console.log('Submit Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <div>
            {/* <div className="flex-row">
                <h2 className="section-title secondary-border">Contact Me</h2>
            </div> */}

            <div className="flex-row contact-info">
                <div>
                    <h3>Hello {name}</h3>
                    <p>You can contact me via:</p>
                    <address>
                        <br />

                        Phone: <a href="tel:+61 424 764 833">+61 424 764 833</a>


                        <br />

                        Email:{" "}
                        <a href="mailto://mevada87@gmail.com">
                            mevada@gmail.com
                        </a>


                        <br />

                        <a href="https://www.linkedin.com/in/mbhavika">Linkedin: </a>


                    </address>
                    <p>
                        <strong>I look forward to hearing from you!</strong>
                    </p>
                </div>
            </div>

            <section className='formContact'>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={name}
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <input
                            type="email"
                            name="email"
                            defaultValue={email}
                            onBlur={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            rows="5"
                            defaultValue={message}
                            onBlur={handleChange}
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    );
}

export default Contact;