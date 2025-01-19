import React from 'react';
import { Helmet } from 'react-helmet';

const HeadSection = () => {
    return (
        <Helmet>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="description" content="Explore My Nabin Poudel portfolio, a passionate web developer skilled in JavaScript, Node.js, and MongoDB. Discover my projects and expertise in creating dynamic web applications." />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="keywords" content="Portfolio, Nabin poudel, nabin poudel, Nabin Poudel, Web Developer, Software Developer, Pokhara University, La Grandee International College, Bachelor of Computer Application (BCA), HTML5, CSS3, JavaScript, Node.js, Express.js and MongoDB." />
            {/* Open Graph Meta Tags */}
            <meta property="og:title" content="Nabin Poudel | Web Developer Portfolio" />
            <meta property="og:description" content="Explore My Nabin Poudel portfolio, a passionate web developer skilled in JavaScript, Node.js, and MongoDB. Discover my projects and expertise in creating dynamic web applications." />
            <meta property="og:image" content="./icons/nabin.webp" />
            <meta property="og:url" content="https://nabin788.com.np" />
            <link rel="canonical" id="canonical-link" href="https://nabin788.com.np" />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Nabin Poudel Portfolio" />
            <meta property="og:locale" content="en_US" />

            <title>Nabin Poudel | Web Developer Portfolio</title>
            <link rel="icon" sizes="32x32" href="/public/favicon.ico" type="image/x-icon" />

            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link rel="preload" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" as="style" onLoad="this.onload=null;this.rel='stylesheet'" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

            <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Nabin Poudel",
                    "url": "https://nabin788.com.np",
                    "image": "./icons/nabin.webp",
                    "jobTitle": "Web Developer",
                    "description": "Enthusiastic and detail-oriented Software Developer with a strong foundation in computer science. Proficient in HTML, CSS, JavaScript, and experienced with MongoDB, Node.js, and Express.js.",
                    "email": "mailto:nabinpoudel788@gmail.com",
                    "sameAs": [
                        "https://github.com/Nabin788",
                        "https://www.facebook.com/nabbin.poudel.31",
                        "https://www.linkedin.com/in/nabin-poudel-10150a320/",
                        "https://www.twitter.com/"
                    ],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Pokhara",
                        "addressCountry": "Nepal"
                    },
                    "knowsAbout": [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Node.js",
                        "Express.js",
                        "MongoDB"
                    ]
                }
                `}
            </script>
        </Helmet>
    );
};

export default HeadSection;
