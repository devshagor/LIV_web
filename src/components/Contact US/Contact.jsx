import React from "react";
import Canvas from "../Canvas/Canvas";

import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import "./contact.scss";

const Contact = () => {
  return (
    <>
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
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Name
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputtext1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputtext1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputtext1" class="form-label">
                      Subject
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputtext1"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputtext1" class="form-label">
                      Message
                    </label>
                    <textarea
                      type="text`"
                      class="form-control"
                      id="exampleInputtext1"
                    />
                  </div>
                  <div className="btn-adjust">
                    <button type="submit" class="btn-artist">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
