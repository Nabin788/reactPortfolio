import { Link } from "react-router-dom"
export const ContentSection = () => {
    return (
        <section className="home-section" id="home">
            <div className="my-img">
                <div className="picture">
                    <img className="myHome-img" src="/public/nabin.webp" alt="Nabin Poudel" loading="lazy" />
                </div>
            </div>
            <div className="myInfo-container">
                <div className="my-info">
                    <div className="info">
                        <p>Hello,</p>
                        <h2>I'm Nabin Poudel</h2>
                        <p className="textTyping">Software Developer</p>
                    </div>
                    <div className="myShort-description">
                        <span>Enthusiastic and detail-oriented Software Developer with a strong foundation in computer
                            science.
                            Proficient in HTML, CSS, JavaScript, and experienced with MongoDB, Node.js, and Express.js.
                            Passionate
                            about coding, problem-solving, and continuously learning new technologies.</span>
                    </div>
                </div>
                <div className="social-media">
                    <a href="https://github.com/Nabin788" target="_blank">
                        <img className="social-icon" src="/public/github.webp" alt="Nabin Poudel GitHub Profile" loading="lazy" />
                    </a>
                    <a href="https://www.facebook.com/nabbin.poudel.31" target="_blank">
                        <img className="social-icon" src="/public/facebook.webp" alt="Nabin Poudel Facebook Profile"
                            loading="lazy" />
                    </a>
                    <a href="https://www.linkedin.com/in/nabin-poudel-10150a320/" target="_blank">
                        <img className="social-icon" src="/public/linkedin.webp" alt="Nabin Poudel Linkedin Profile"
                            loading="lazy" />
                    </a>
                    <a href="https://www.twitter.com/" target="_blank">
                        <img className="social-icon" src="/public/twitter.webp" alt="Nabin Poudel Twitter Profile"
                            loading="lazy" />
                    </a>
                </div>
                <div className="about-page">
                    <button className="about-btn">
                        <Link to="/about" className="linkBtn">More about me</Link></button>
                </div>
            </div>
        </section>
    )
}