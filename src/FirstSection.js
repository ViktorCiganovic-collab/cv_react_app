
// src/FirstSection.js
import React from "react";
import './FirstSection.css';

function FirstSection() {
    return (
        <div className="first-section">
            <div className="greySection">

                <div className="image_div"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHllSgJ-VvfF6lr3Aapb8tyx4ZjQm7Kw7SEw&s" className="CV_image"></img></div>
                
                <div>
                    <h3>About Me</h3>
                    <p className="aboutSection">I am a highly competent IT professional with a proven track record in designing websites, networking and managing databases. I have strong technical skills as well as excellent interpersonal skills, enabling me to interact with a wide range of clients. I am eager to be challenged in order to grow and further improve my IT skills. My greatest passion is in life is using my technical know-how to benefit other people and organisations.</p>
                </div>

                <div className="socialMedia">
                    <h3>WEBSITE & SOCIAL LINKS</h3>

                    <div>
                    <p>Facebook:</p>
                    <p>facebook.com/robinson</p>
                    </div>

                    <div>
                    <p>Behance:</p>
                    <p>behance.net/robinson</p>
                    </div>

                    <div>
                    <p>Twitter:</p>
                    <p>twitter.com/robinson</p>
                    </div>

                </div>            
            </div>

            <div className="rightSide">
                <div className="firstRowrightSide">
                    <div className="titleFirstRow"><p>MICHELLE ROBINSON</p> <p>GRAPHIC DESIGNER</p></div>
                    <div><p>14585 10th AveWhiteStone, NY</p><p>+1212-941-7824</p><p>info@urmailadress.com</p><p>info@urmailadress.com</p></div>
                </div>

                <div className="grey_style_line"></div>

                <div>WORK EXPERIENCE</div>
                <div className="firstLineWorkExp">
                    <div>
                        <div className="title">GLOWPIXEL LTD</div>
                        <div>Orlando</div>
                        <div>2015-2016</div>
                    </div>
                    <div>
                        <div>Senior Graphic Designer</div>
                        <div>Customer-oriented Graphic Designer with strong history of leading performance team to meet or exceed objectives. Dedicated and hardworking with internal drive to deliver excellence</div>
                    </div>
                </div>

                <div className="secondLineWorkExp">
                    <div>
                    <div className="title">LOREM IPSUM</div>
                    <div>New York</div>
                    <div>2014-2015</div>                    
                    </div>
                    <div>
                        <div>Graphic Designer</div>
                        <div>Customer-oriented Graphic Designer with strong history of leading performance team to meet or exceed objectives. Dedicated and hardworking with internal drive to deliver excellence</div>
                    </div>                  
                
                </div>

                <div className="thirdLineWorkExp">
                    <div>
                    <div className="title">PIXELATE AGENCY</div>
                    <div>New York</div>
                    <div>2014-2015</div>                    
                    </div>
                    <div>
                        <div>Graphic Designer</div>
                        <div>Customer-oriented Graphic Designer with strong history of leading performance team to meet or exceed objectives. Dedicated and hardworking with internal drive to deliver excellence</div>
                    </div>                  
                
                </div>

                <div className="grey_style_line"></div>

                <div>EDUCATION</div>

                                <div className="firstLineWorkExp">
                    <div>
                        <div className="title">COLLEGE OF ART</div>
                        <div>New Arl</div>
                        <div>2006-2010</div>
                    </div>
                    <div>
                        <div>Bachelor in Graphic Design</div>
                        <div>Customer-oriented Graphic Designer with strong history of leading performance team to meet or exceed objectives. Dedicated and hardworking with internal drive to deliver excellence</div>
                    </div>
                </div>

                <div className="secondLineWorkExp">
                    <div>
                    <div className="title">UNIVERSITY OF UK</div>
                        <div>Toronto</div>
                        <div>2010-2012</div>                    
                    </div>
                    <div>
                        <div>Master in Web Develop</div>
                        <div>Customer-oriented Graphic Designer with strong history of leading performance team to meet or exceed objectives. Dedicated and hardworking with internal drive to deliver excellence</div>
                    </div>                  
                
                </div>                

            </div>
        </div>
    );
}

export default FirstSection;
