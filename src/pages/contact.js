
import React from 'react';

const Contact = () => {
    return ( 
        <div id="container">
            <h1 id="heading">Contact Me</h1>
            <p id="supporting_text">Hi there, contact me to ask about anything you have in mind.</p>
            <form>
                <div className="name_row">
                    <div>
                        <label for="first_name">First name</label>
                        <input
                        id="first_name"
                        type="text"
                        placeholder="Enter your first name"
                        />
                    </div>
                    <div>  
                        <label for="last_name">Last name</label>
                        <input
                        id="last_name"
                        type="text"
                        placeholder="Enter your last name"
                        />
                    </div> 
                </div>
                <div>
                    <label for="email">Email</label>
                    <input
                    id="email"
                    type="email"
                    placeholder="yourname@email.com"
                    />
                </div>
                <div>
                    <label for="message">Message</label>
                    <br />
                    <textarea
                    id="message"
                    name="message"
                    placeholder="Send me a message and i'll reply you as soon as possible..."
                    />
                </div>
                <div id="consent_parent">
                    <input
                    id="consent"
                    type="checkbox"
                    />
                    <label for="consent">
                        You agree to providing your data to Biocell who may contact you.
                    </label>
                </div>
                <div className="btn">
                <button
                id="btn__submit">
                    Send message
                    </button>
                    </div>
            </form>
        </div>
     );
}
 
export default Contact;