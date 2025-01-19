import { Link } from "react-router-dom"
import { FooterSection } from "./HomeSubComponents/Footer.jsx"
import { HeaderSection } from "./HomeSubComponents/HeaderSection.jsx"

export const AboutSection = () => {
    return (
        <>
            <HeaderSection />
            <section className="about-section" id="about-section">
                <a className="resume-btn" href="/public/nabinResume.pdf" download aria-label="Download my resume">
                    Resume <img className="resume-icon" src="/public/resume.gif" alt="Nabin Poudel - CV" loading="lazy" />
                </a>
                <section className="introduction">
                    <h2>About Me</h2>
                    <p>
                        Hello! I'm Nabin Poudel, a passionate web developer with a solid foundation in frontend and backend
                        technologies. I hold a Bachelor of Computer Applications (BCA) from LA Grandee International College,
                        affiliated with Pokhara University. Over the years, I’ve developed a keen interest in creating
                        user-friendly, dynamic web applications. I’m skilled in building responsive websites and working with
                        APIs.
                        Some of my notable projects include my portfolio website and a weather app, showcasing my ability to
                        deliver
                        functional and aesthetically pleasing solutions.
                        I’m always excited to take on new challenges, learn new technologies, and create impactful digital
                        experiences.
                        Let’s build something amazing together!
                    </p>
                </section>
                <div className="skills">
                    <h3>Skills</h3>
                    <div className="skills-list">
                        <div className="front-end">
                            <strong>FrontEnd</strong>
                            <p><img className="skills-icons" src="/public/html5.webp" alt="Nabin Poudel Skills - HTML5"
                                loading="lazy" />
                                HTML5</p>
                            <p><img className="skills-icons" src="/public/css3.webp" alt="Nabin Poudel Skills - CSS5"
                                loading="lazy" />
                                CSS3</p>
                            <p><img className="skills-icons" src="/public/javaScript.webp" alt="Nabin Poudel Skills - JavaScript"
                                loading="lazy" />
                                JavaScript</p>
                        </div>
                        <div className="back-end">
                            <strong>BackEnd</strong>
                            <p> <img className="skills-icons" src="/public/nodejs.webp" alt="Nabin Poudel Skills - Node.js"
                                loading="lazy" /> Node.js</p>
                            <p> <img className="skills-icons" src="/public/expressjs.webp" alt="Nabin Poudel Skills - Express.js" loading="lazy" />
                                Express.js</p>
                            <p> <img className="skills-icons" src="/public/mongoDB.webp" alt="Nabin Poudel Skills - MongoDB"
                                loading="lazy" /> MongoDB
                            </p>
                            <p> <img className="skills-icons" src="/public/mongoose.webp" alt="Nabin Poudel Skills - Mongoose"
                                loading="lazy" /> Mongoose
                            </p>
                        </div>
                        <div className="version-control">
                            <strong>Version Control</strong>
                            <p><img className="skills-icons" src="/public/git.webp" alt="GNabin Poudel Skills - Git"
                                loading="lazy" />Git
                            </p>
                            <p><img className="skills-icons" src="/public/github.webp" alt="Nabin Poudel Skills - GitHUb"
                                loading="lazy" />GitHub</p>
                        </div>
                        <div className="tools">
                            <strong>Tools</strong>
                            <p> <img className="skills-icons" src="/public/vsCode.webp"
                                alt="Nabin Poudel Skills - Visual Studio Code" loading="lazy" /> Visual
                                Studio</p>
                            <p> <img className="skills-icons" src="/public/postman.webp" alt="Nabin Poudel Skills - Postman"
                                loading="lazy" /> Postman
                            </p>
                        </div>
                        <div className="develope">
                            <strong>What I Do</strong>
                            <ul>
                                <li>Responsive Design</li>
                                <li>server side programming</li>
                                <li>RESTful APIs</li>
                                <li>Web Hosting and Deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <h4>Education</h4>
                    <div className="master">
                        <p>College: Medhavi College</p>
                        <div className="program">
                            <span>Program: Master in Computer Systems and Information Technology</span>
                            <span className="year">2024-Present</span>
                        </div>

                    </div>
                    <div className="bachelor">
                        <p>College: LA GRANDEE International College</p>
                        <div className="program">
                            <span>Program: Bachelor of computer application</span>
                            <span className="year">2018-2023</span>
                        </div>
                    </div>
                    <div className="higher">
                        <p>College: Moonlight Higher Secondary School</p>
                        <div className="program">
                            <span>Course: 12th Management</span>
                            <span className="year">2016-2018</span>
                        </div>

                    </div>
                    <div className="slc">
                        <p>School: Shree Nepal Rastriya M.V</p>
                        <div className="program">
                            <span>SLC</span>
                            <span className="year">2016</span>
                        </div>
                    </div>
                </div>
                <div className="connect">
                    <div className="reach-visit">
                        <h5>Reach me</h5>
                        <p><img className="gmail-icon" src="/public/gmail.webp" alt="Nabin Poudel Gmail Account" loading="lazy" />
                            nabinpoudel788@gmail.com</p>
                        <p><img className="contact-icon" src="/public/e-contact.webp" alt="Nabin Poudel Contact Number"
                            loading="lazy" />982665625</p>
                    </div>
                    <button className="visit-btn"><Link to="/portfolio" className="linkBtn">Visit My Work</Link></button>
                </div>
            </section>
            <FooterSection />
        </>


    )
}