import HeroSection from "./components/hero-section";
import AboutUs from "./components/about";
import TopNavbar from "./components/topnavbar";
import OfficeSection from "./components/office-section";
import ContactUs from "./components/contact-us";

export default function App() {
    return (
        <>
            <TopNavbar />
            <HeroSection />
            <AboutUs />
            <OfficeSection />
            <ContactUs />

        </>
    );
}
