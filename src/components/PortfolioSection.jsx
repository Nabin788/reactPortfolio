import { useState, useEffect } from "react";
import { FooterSection } from "./HomeSubComponents/Footer.jsx";
import { HeaderSection } from "./HomeSubComponents/HeaderSection.jsx";

export const PortfolioSection = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/project.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                return response.json();
            })
            .then((data) => {
                // Set the entire data array
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <HeaderSection />

            <section className="project-container" id="project-section">
                <div className="project-list">
                    {projects.map((project, index) => (
                        <div key={index} className="project-item">
                            <div className="img-name">
                                <h2 className="project-name">{project.project}</h2>
                                <div className="project-img-container">
                                    <img
                                        className="project-img"
                                        src={project.image}
                                        alt={project.project}
                                        loading="lazy"
                                    />
                                </div>
                                <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                    Live Project
                                </a>
                            </div>
                            <div className="project-description">
                                <h3>About Project</h3>
                                <p className="description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="sourceCode">
                    <h4>Want Source Code:</h4>
                    <a href="https://github.com/Nabin788" target="_blank" rel="noopener noreferrer">
                        <img
                            className="source-icon"
                            src="/public/source-code.webp"
                            alt="Nabin Poudel Source Code."
                            loading="lazy"
                        />
                    </a>
                </div>
            </section>

            <FooterSection />
        </>
    );
};
