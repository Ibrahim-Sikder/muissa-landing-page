import Benefits from "./Benefits";
import FinalCTA from "./FinalCTA";
import LandingHero from "./LandingHero";
import ServiceCategories from "./LandingService";
import OpportunitySection from "./OpportunitySection";
import Testimonials from "./Testimonial";
import WhyOurService from "./WhyOurService";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#00305C] text-white">
      <main className="container mx-auto px-4">

        <LandingHero />
        <WhyOurService/>
        <Benefits />
        <ServiceCategories />
        <OpportunitySection />
        <Testimonials />
        <FinalCTA />
      </main>

    </div>
  )
}

