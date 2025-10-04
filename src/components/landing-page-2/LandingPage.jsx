import Hero from "./Hero";
import Navbar from "./Navbar";
import CardCarousel from "./CardCarousel";
import CareerExploreSection from "./CareerExploreSection";
import TrustedStatsSection from "./TrustedStatsSection";
import PopularJobsSection from "./PopularJobsSection";
import FAQSection from "./FAQSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import TestimonialSection from "./TestimonialSection";
import HeroOpportunitiesSection from "./HeroOpportunitiesSection";
import { BubbleBackground } from "@/components/ui/shadcn-io/bubble-background";
import BlurredCircle from "../ui/BlurredCircle";
import BackgroundGradientWrapper from "../landing-page-2/ui/BackgroundGradientWrapper";


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