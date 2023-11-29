
import React from "react";
import Canvas from "../Canvas/Canvas";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

// import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./contact.scss";

function ContactForm() {
  const [state, handleSubmit] = useForm("xnqkkgzn");
  if (state.succeeded) {
      return (
        <div className="contact-page-wrap">
        <Canvas show="contact" />
          <div className="contact-wrap">
            <div className="contact">
              <Link to="/">
                  <div className="logo-img">
                    <img src={logo} alt="" />
                  </div>
              </Link>
              <div className="navbar">
                    {/* <Link to="/about" className="text">
                      ABOUT
                    </Link>
                    <Link to="/artist" className="text">
                      ARTISTS
                    </Link> */}
                    <Link to="/contact" className="text">
                      CONTACT
                    </Link>
                  </div>
                  
              <div className="content" style={{ width: "100%" }}>
                <div className="data">
                  {/*
                    Render success message if the form is successfully submitted
                  */}
                   
                  <div className="success-message">
                    <p className="mb-0">Thanks for joining!</p>
                  </div>

                  {/* ... (rest of your form code) */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
  return (
    <div className="contact-page-wrap">
       <Canvas show="contact" />
       <div className="contact-wrap">
        <div className="contact">
            <Link to="/">
                <div className="logo-img">
                  <img src={logo} alt="" />
                </div>
            </Link>

            <div className="navbar">
              {/* <Link to="/about" className="text">
                ABOUT
              </Link>
              <Link to="/artist" className="text">
                ARTISTS
              </Link> */}
              <Link to="/contact" className="text">
                CONTACT
              </Link>
            </div>
            <div className="content" style={{ width: "100%" }}>
                
                <div className="data">
                  <div className="title">CONTACT US</div>
                  <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text" 
                        name="name"
                        className="form-control"
                      />
                      <ValidationError 
                        prefix="Name" 
                        field="name"
                        errors={state.errors}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email" 
                        name="email"
                        className="form-control"
                      />
                      <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text" 
                        name="subject"
                        className="form-control"
                      />
                      <ValidationError 
                        prefix="Subject" 
                        field="subject"
                        errors={state.errors}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <textarea
                      className="form-control"
                        id="message"
                        name="message"
                      />
                      <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                      />
                    </div>
                   <div className="btn-adjust">
                    <button type="submit" className="btn-artist" disabled={state.submitting}>
                        Send
                      </button>
                   </div>
                   
                  </form>
                </div>

            </div>
        </div>
       </div>
      
    </div>
    
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
