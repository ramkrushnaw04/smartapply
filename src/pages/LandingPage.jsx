import Hero from "@/components/landing-page/Hero";
import Navbar from "@/components/landing-page/Navbar";
import CardCarousel from "@/components/landing-page/CardCarousel";
import CareerExploreSection from "@/components/landing-page/CareerExploreSection";
import TrustedStatsSection from "@/components/landing-page/TrustedStatsSection";
import PopularJobsSection from "@/components/landing-page/PopularJobsSection";
import FAQSection from "@/components/landing-page/FAQSection";
import ContactSection from "@/components/landing-page/ContactSection";
import Footer from "@/components/landing-page/Footer";
import TestimonialSection from "@/components/landing-page/TestimonialSection";
import HeroOpportunitiesSection from "@/components/landing-page/HeroOpportunitiesSection";



const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white">
            
            <Navbar />
            <Hero />
            <CardCarousel />
            <CareerExploreSection />
            <TrustedStatsSection />
            <PopularJobsSection />
            <TestimonialSection />
            <HeroOpportunitiesSection />
            <FAQSection />
            <ContactSection />
            <Footer />


        </div>
    );
};

export default LandingPage;