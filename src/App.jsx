import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomeSection } from "./components/HomeSection.jsx"
import { AboutSection } from "./components/AboutSection.jsx"
import { ContactSection } from "./components/ContactSection.jsx"
import { PortfolioSection } from "./components/PortfolioSection.jsx"
import HeadSection from "./components/Head.jsx"

export const APP = () => {
    return (
        <Router>
            <HeadSection />
            <Routes>
                <Route path="/" Component={HomeSection} />
                <Route path="/home" Component={HomeSection} />
                <Route path="/about" Component={AboutSection} />
                <Route path="/contact" Component={ContactSection} />
                <Route path="/portfolio" Component={PortfolioSection} />
            </Routes>
        </Router>
    )
}