import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import AvailableHostels from "../components/AvailableHostels"
import AboutSection from "../components/AboutSection"
import Footer from "../components/Footer"
import FAQSection from "../components/FAQSection"

function HomePage() {
  return (
    <div className="homepage">
      <Navbar />

      <HeroSection />

      <HowItWorks />

      <AvailableHostels />

      <AboutSection />

      <FAQSection />
      
      <Footer />
    </div>
  )
}

export default HomePage