import { ContentSection } from "./HomeSubComponents/ContentSection.jsx"
import { FooterSection } from "./HomeSubComponents/Footer.jsx"
import { HeaderSection } from "./HomeSubComponents/HeaderSection.jsx"

export const HomeSection = () => {
    return (
        <section className="pageMargin">
            <HeaderSection />
            <ContentSection />
            <FooterSection />
        </section>
    )
}