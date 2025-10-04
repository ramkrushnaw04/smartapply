import React, { useState, useEffect } from 'react';
import { ChevronRight, Search, Users, Zap, Shield, Star, Play, ArrowRight, Menu, X } from 'lucide-react';
import { Navbar } from './Navbar';
import { HeroSection } from './landing-page/HeroSection';
import { TrustSection } from './landing-page/TrustSection';
import { FeaturedJobsSection } from './landing-page/FeaturedJobsSection';
import { FeaturesSection } from './landing-page/FeaturesSection';
import { TestimonialsSection } from './landing-page/TestimonialsSection';
import { CTASection } from './landing-page/CTASection';
import {FAQSection} from './landing-page/FAQSection';
import { Footer } from './landing-page/Footer';
import { GradientBackgroundWrapper } from './ui/GradientBackgroundWrapper';

// Main App Component
const SmartApply = () => {
  return (
    <div className="min-h-screen bg-white">
        <GradientBackgroundWrapper>
            <Navbar />
            <HeroSection />
            <TrustSection />
            <FeaturedJobsSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CTASection />
            <FAQSection />
            <Footer />
        </GradientBackgroundWrapper>
    </div>
  );
};

export default SmartApply;