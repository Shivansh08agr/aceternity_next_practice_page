import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import CoolEffect from '@/components/CoolEffect';
import TestimonialCards from '@/components/TestimonialCards';
import UpcomingWebinars from './../components/UpcomingWebinars';
import Instructors from './../components/Instructors';
import Footer from './../components/Footer';


export default function Home() {
  return (
   <main>
    <HeroSection />
    <FeaturedCourses/>
    <CoolEffect/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    <Footer/>
   </main>
  );
}
