import React from "react";
import Canvas from "../Canvas/Canvas";

import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow.png";
import pic from "../../assets/pic.png";
import pic2 from "../../assets/pic2.PNG";
import pic3 from "../../assets/pic3.PNG";
import pic4 from "../../assets/pic4.PNG";

import kidlogo from "../../assets/kid.PNG";
import soundcloud from "../../assets/soundcloud.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import spotify from "../../assets/spotify.png";
import insta from "../../assets/insta.png";
import { ImSoundcloud2 } from "react-icons/im";
import { Link } from "react-router-dom";
import { BsApple } from "react-icons/bs";
import "./artist.scss";

const Artist = () => {
  return (
    <>
      <div className="artist-wrap">
        <Canvas show="artist" />

        <div className="artist-main-content-wrap">
          <div className="artist">
            <div>
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

              <div className="background-color-content">
                <div
                  id="carouselExampleControls"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div className="content content1">
                        <div className="image">
                          <img src={pic2} alt="" />
                          <div className="shadow"></div>
                        </div>

                        <div className="data">
                          <div className="title">
                            K<span className="skin">I</span>D
                            <span className="skin"> K</span>
                            ING<span className="skin">I</span>N
                            <span className="skin">D</span>
                            EMAND
                          </div>

                          <div className="para">
                            <span className="skin">
                              Chicago-born artist,{" "}
                              <strong>King In Demand (KiD</strong>) is a lyrical
                              powerhouse ready to share his story.
                            </span>

                            <span className="skin">
                              The young rapper is no stranger to the harsh
                              realities of life. Coping with the death of both
                              his parents at a young age led him down an
                              unstable path. KiD lived In 27 foster homes, 13
                              group homes, and 4 shelters,
                              <strong>
                                Rapping is a safety outlet for him.
                              </strong>
                            </span>

                            <span>
                              KiD's distinctive tone cuts through any record and
                              his pen sets him apart every time.
                              <strong>
                                Rebellious, sharp, and eager to be heard,
                              </strong>{" "}
                              KiD is easily an artist to watch.
                            </span>

                            <span className="C-font">
                              Lyrical Beast
                              <br />
                              Deep story
                              <br />
                              Agressive/Gangster
                              <br />
                              Authentic Hip Hop
                              <br />
                              Chicago
                            </span>
                          </div>
                          {/* https://soundcloud.com/kingindemand */}
                          <div className="social">
                            <a
                              href="https://www.instagram.com/kingindemand/?hl=en

"
                              target={"_blank"}
                            >
                              <img src={insta} alt="" />
                            </a>

                            <img src={youtube} alt="" />
                            <img src={spotify} alt="" />
                            <img src={twitter} alt="" />
                            <a
                              href="https://soundcloud.com/kingindemand 
                                "
                              target={"_blank"}
                            >
                              <ImSoundcloud2 color="white" />
                            </a>
                          </div>
                        </div>

                        {/* <a href="#firstartist" className="arrow">
                          <img src={arrow} alt="" />
                        </a> */}
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="firstartist" className="content content5">
                        <div className="image">
                          <img src={pic} alt="" />
                          <div className="shadow"></div>
                        </div>
                        <div className="data">
                          <div className="title">
                            B<span className="skin">JRNK</span>
                          </div>

                          <div className="para">
                            <span className="skin">
                              Chicago-bred singer{" "}
                              <strong>BJRNCK is R&B's </strong> next superstar.
                            </span>

                            <span className="skin">
                              At the age of 14, BJRNCK moved to California and
                              began pursuing an education in music at Los
                              Angeles County High School for the Arts. There she
                              <strong>
                                discovered her genuine love for music, developed
                                skill and technique
                              </strong>{" "}
                              , but most importantly{" "}
                              <strong>found her voice.</strong>
                            </span>

                            <span className="skin">
                              The 24-year-old's angelic tone, incredible range,
                              sultry lyrics, and effortless appeal has guided
                              her in the music business as an artist to watch.{" "}
                            </span>

                            <span>
                              Collaborating with the industry's most valuable
                              names, most recently producer and artist London on
                              da Track, BJRNCK is on her way to become a force
                              with her upcoming releases.
                            </span>
                            <span>
                              <strong>
                                Transcending time and creating moments
                              </strong>{" "}
                              with each record will set BJRNCK apart in the new
                              era of R&B.
                            </span>

                            <span className="C-font">
                              R&B/ Soul
                              <br />
                              Eccentric <br />
                              Chicago
                            </span>
                          </div>

                          <div className="social">
                            <a
                              href="     https://www.instagram.com/bjrnck/?hl=en "
                              target={"_blank"}
                            >
                              <img src={insta} alt="" />
                            </a>

                            <a
                              href="    https://www.youtube.com/user/belizeangirl2001"
                              target={"_blank"}
                            >
                              <img src={youtube} alt="" />
                            </a>
                            <a
                              href="     https://open.spotify.com/artist/75CB9gAqPzqMGNHxymmxfg?si=aF9Su3kuT0Sf3ULb-GOuIA&nd=1
 "
                              target={"_blank"}
                            >
                              <img src={spotify} alt="" />
                            </a>
                            <a
                              href="     https://twitter.com/BJRNCK
"
                              target={"_blank"}
                            >
                              <img src={twitter} alt="" />
                            </a>
                            <a
                              href="  https://soundcloud.com/bjrnck "
                              target={"_blank"}
                            >
                              <ImSoundcloud2 />
                            </a>
                            <a
                              href="https://music.apple.com/ae/artist/bjrnck/1204023712 "
                              target={"_blank"}
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <BsApple />
                              Music
                            </a>
                          </div>
                        </div>

                        {/* <a href="#secondartist" className="arrow">
                          <img src={arrow} alt="" />
                        </a> */}
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="secondartist" className="content content2">
                        <div className="image">
                          <img src={pic3} alt="" />
                          <div className="shadow"></div>
                        </div>

                        <div className="data">
                          <div className="title">G5ABY</div>

                          <div className="para">
                            <span className="skin">
                              <span className="b-font">G 5aby</span> is the
                              young energetic and new face to trap music.
                            </span>
                            <span className="skin">
                              The rapper Is known for his{" "}
                              <span className="b-font">
                                tone, lyrical ability, and a range of records
                                for the ladies, trenches, and streets.
                              </span>
                            </span>
                            <span>
                              G5 Is{" "}
                              <span className="b-font">the full package </span>
                              and represents new age artists.
                            </span>
                            <span className="C-font">
                              Rap
                              <br />
                              New Era
                              <br />
                              Atlanta
                            </span>
                            {/* https://soundcloud.com/g5aby
                            https://music.apple.com/us/artist/g-5aby/1502827878 */}
                            <div className="social">
                              <a
                                href="  https://www.instagram.com/g5aby/?hl=en"
                                target="_blank"
                              >
                                <img src={insta} alt="" />
                              </a>
                              <a
                                href="https://www.youtube.com/channel/UCRS2EGFZC1VxGSEzmUK2Mbw
                                "
                                target="_blank"
                              >
                                <img src={youtube} alt="" />
                              </a>{" "}
                              <a
                                href="https://open.spotify.com/artist/0SyhewtXP3D9Z7DWdRn46O?autoplay=true
                                "
                                target="_blank"
                              >
                                <img src={spotify} alt="" />
                              </a>{" "}
                              <a
                                href="  https://www.instagram.com/g5aby/?hl=en"
                                target="_blank"
                              >
                                <img src={twitter} alt="" />
                              </a>
                              <a
                                href="https://soundcloud.com/g5aby"
                                target={"_blank"}
                              >
                                <ImSoundcloud2 color="white" />
                              </a>
                              <a
                                href="https://music.apple.com/us/artist/g-5aby/1502827878 "
                                target={"_blank"}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <BsApple />
                                Music
                              </a>
                            </div>
                          </div>
                        </div>

                        {/* <a href="#thirdartist" className="arrow">
                          <img src={arrow} alt="" />
                        </a> */}
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div id="thirdartist" className="content content4">
                        <div className="image">
                          <img src={pic4} alt="" />
                          <div className="shadow"></div>
                        </div>
                        <div className="data">
                          <div className="title">
                            QUA<span className="skin">N</span>T
                            <span className="skin">R</span>
                            ELL<span className="skin">E</span>
                          </div>
                          <div className="para">
                            <span className="skin">
                              <strong>Quantrelle</strong> is a melodic, hip hop
                              and R&B artist out of
                              <strong>Charlotte, North Carolina.</strong>
                            </span>

                            <span className="skin">
                              His{" "}
                              <strong>
                                intricate wordplay, ingenious metaphors, and
                                universal sound
                              </strong>{" "}
                              has allowed fans to gravitate naturally toward his
                              music.
                            </span>

                            <span className="skin">
                              Quantrelle's{" "}
                              <strong>
                                {" "}
                                relatable stories and infectious hooks
                              </strong>{" "}
                              makes for a Top 40 record everytime.
                            </span>

                            <span>
                              <strong>Mood music that heals the soul.</strong>
                            </span>

                            <span className="C-font">
                              Melodic Hip Hop and RnB <br />
                              Top 40 (Urban)
                              <br />
                              North Carolina
                            </span>
                          </div>
                          {/* https://soundcloud.com/quantrelle/tracks
                        https://music.apple.com/us/artist/quantrelle/1230685645 */}
                          <div className="social">
                            <a
                              href="   https://www.instagram.com/quantrelle/?hl=en"
                              target={"_blank"}
                            >
                              <img src={insta} alt="" />
                            </a>
                            <a
                              href="https://www.youtube.com/channel/UCACH0mUfEPti3-zmVIAOPIg"
                              target={"_blank"}
                            >
                              <img src={youtube} alt="" />
                            </a>
                            <a
                              href="https://open.spotify.com/artist/6ihQt9eX2GMCUf08donJvo?autoplay=true"
                              target={"_blank"}
                            >
                              <img src={spotify} alt="" />
                            </a>
                            <a
                              href="https://twitter.com/qdotcokley"
                              target={"_blank"}
                            >
                              <img src={twitter} alt="" />
                            </a>
                            <a
                              href="https://soundcloud.com/quantrelle/tracks
                                "
                              target={"_blank"}
                            >
                              <ImSoundcloud2 color="white" size={24} />
                            </a>
                            <a
                              href="https://music.apple.com/us/artist/quantrelle/123068564"
                              target={"_blank"}
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <BsApple />
                              Music
                            </a>
                          </div>
                        </div>

                        {/* <div className="arrow">
                          <img src={arrow} alt="" />
                        </div> */}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;
