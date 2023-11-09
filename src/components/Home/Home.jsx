import React from "react";
import Canvas from "../Canvas/Canvas";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <>
      <div className="home">
        <Canvas show="home" />

        <div className="content">
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

            {/* <div className="text">ABOUT</div>
            <div className="text">ARTISTS</div>
            <div className="text">CONTACT</div> */}
          </div>

          <div className="logo-img">
            <img src={logo} alt="" />
          </div>

          <div className="live">LIVE IN VOLUME</div>
          {/* <div className="live">coming soon</div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
