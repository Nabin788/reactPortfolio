import { useEffect, useState } from "react";
import { FooterSection } from "./HomeSubComponents/Footer.jsx";
import { HeaderSection } from "./HomeSubComponents/HeaderSection.jsx";

export const ContactSection = () => {
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const userName = document.getElementById("name");
        const userEmail = document.getElementById("email");
        const contactBtn = document.getElementById("submit-btn");

        const checkValue = () => {
            const userValue = userName.value;
            const emailValue = userEmail.value;
            const nameValue = userName.value.trim();
            const emailValid = emailValue.includes("@");

            if (nameValue === "") {
                alert("Please enter a valid name.");
                return userName.focus();
            }

            // Show or hide the button based on input values
            setIsValid(userValue && emailValid);
        };

        // Add input event listeners for validation
        userName.addEventListener("input", checkValue);
        userEmail.addEventListener("input", checkValue);

        // Cleanup event listeners when the component unmounts
        return () => {
            userName.removeEventListener("input", checkValue);
            userEmail.removeEventListener("input", checkValue);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to server)
        // For now, we'll just log the values
        console.log("Form submitted");
    };

    return (
        <section className="pageMargin">
            <HeaderSection />
            <section className="section-contact" id="contact">
                <div className="contact-container" id="contacs">
                    <div className="contact-form">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="name-email">
                                <div className="name">
                                    <label htmlFor="name"></label>
                                    <input type="text" id="name" name="name" className="nameEmail" placeholder="Name"
                                        required autoComplete="off" />
                                </div>
                                <div className="email">
                                    <label htmlFor="email"></label>
                                    <input type="email" id="email" name="email" className="nameEmail" placeholder="Email"
                                        required autoComplete="off" />
                                </div>
                            </div>
                            <div className="contact-message">
                                <textarea name="message" placeholder="Tell me what you want?" required></textarea>
                            </div>
                            <div className="button">
                                <input type="submit" id="submit-btn" className="btn-submit" style={{ display: isValid ? "flex" : "none" }} />
                            </div>
                        </form>
                    </div>
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d902.6722036025226!2d82.7606253196002!3d27.840496748506652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d27.8406181!2d82.7612843!4m3!3m2!1d27.840426899999997!2d82.76116929999999!5e1!3m2!1sen!2snp!4v1727003336059!5m2!1sen!2snp"
                            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="my Location"></iframe>
                    </div>
                </div>
            </section>
            <FooterSection />
        </section>
    );
};
