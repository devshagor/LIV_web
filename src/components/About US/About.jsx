import React from "react";
import Canvas from "../Canvas/Canvas";

import logo from "../../assets/logo.png";
import founder from "../../assets/founder.PNG";

import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";
import "./about.scss";

const About = () => {
  return (
    <>
      <div className="about-wrap">
        <Canvas show="about" />

        <div className="about">
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
            {/* <div className="text">ARTISTS</div> */}
            <Link to="/contact" className="text">
              CONTACT
            </Link>
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="content">
                  <div className="data">
                    <div className="title">ABOUT US</div>

                    <div className="para">
                      <span>
                        To increase the volume in life, to enhance the
                        frequencies in music, and to maximize the creative
                        experience. We present Live In Volume (LiV) Records. An
                        imprint that will represent ever-changing, genre
                        breaking, and limitless music.
                      </span>

                      <span>
                        Under the leadership of Hit Making producer London on Da
                        Track, the collective and label will roll out a slew of
                        recording artists of all genres. The LiV team combines
                        their skills within technology, culture, and music to
                        present talent in a future focused way.{" "}
                      </span>

                      <span>
                        "Live your dreams, Live abundantly, and Live in VOLUME."
                      </span>
                      <span style={{ marginTop: "-5px" }}>
                        - CEO, London On Da Track
                      </span>
                    </div>
                  </div>

                  <div className="image">
                    <img src={logo} alt="" />
                  </div>

                  {/* <div className="arrow">
                    <img src={arrow} alt="" />
                  </div> */}
                </div>
              </div>
              <div class="carousel-item">
                <div className="content about-content1">
                  <div className="data">
                    <div>
                      <img src={founder} className="founder-img" />
                    </div>
                    <div className="title">ABOUT OUR FOUNDER</div>
                    {/* style={{ color: "#8f881f" }} */}
                    <div className="para">
                      <span>
                        <span className="b-font">London Holmes,</span> known
                        professionally as{" "}
                        <span className="b-font">London on da Track,</span> is a
                        multiplatinum selling American record producer, artist,
                        and songwriter
                      </span>

                      <span>
                        In 2021, London is <span className="b-font"></span>3x
                        GRAMMY nominated for{" "}
                        <span className="b-font">Best Pop Vocal Album</span>
                        and{" "}
                        <span className="b-font">
                          Best Pop Solo Performance
                        </span>
                        for his contribution on{" "}
                        <span className="b-font">
                          Ariana Grande's Positions.
                        </span>
                      </span>

                      <span>
                        London gained his start as a frequent collaborator of
                        fellow Atlanta rapper{" "}
                        <span className="b-font">Young Thug</span> and later
                        worked with{" "}
                        <span className="b-font">
                          Lil Wayne, Lil Baby, Nicki Minaj, Saweetie, Da Baby,
                          Summer Walker, Drake, Post Malone, 21 Savage, among
                          others.
                        </span>
                      </span>

                      <span className="skin">
                        The infamous tag, We Got London On Da Track has been an
                        accredited cosign within the culture.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="content our-team">
                  <div className="main-title">OUR TEAM</div>

                  <div className="wrapper">
                    <div className="text-wrap">
                      <div className="title">PRESIDENT OF A R</div>
                      <div className="sub">JAYSON LEGACY</div>
                    </div>

                    <div className="text-wrap">
                      <div className="title">HEAD OF ARTIST RELATIONS</div>
                      <div className="sub">TIA LONG</div>
                    </div>

                    <div className="text-wrap">
                      <div className="title">CREATIVE DIRECTOR</div>
                      <div className="sub">ABEL PAUL GEORGE</div>
                    </div>

                    <div className="text-wrap">
                      <div className="title">VP OF A R</div>
                      <div className="sub">TSHISUKA PATRICK WAKA TSHIMANGA</div>
                    </div>

                    <div className="text-wrap">
                      <div className="title">VP OF MARKETING</div>
                      <div className="sub">MANNY PEREZ</div>
                    </div>
                    {/* 
                    <div className="text-wrap">
                      <div className="title">ACCOUNTING FINANCE</div>
                      <div className="sub">JAMIE ARNADA</div>
                    </div> */}

                    <div className="text-wrap">
                      <div className="title">PUBLIC RELATIONS</div>
                      <div className="sub">SIMONE KING</div>
                    </div>

                    <div className="text-wrap">
                      <div className="title">CONTENT</div>
                      <div className="sub">MIKE CHOPRA</div>
                    </div>

                    <div className="text-wrap">
                      <div className="title">PRODUCT MANAGER</div>
                      <div className="sub">IVY RIVERA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
