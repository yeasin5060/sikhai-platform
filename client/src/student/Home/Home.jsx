import React from 'react';
import Hero from './Hero';
import HomeStats from './HomeStats';
import Categories from './Categories';
import FeaturedCourses from './FeaturedCourses';
import PopularCourses from './PopularCourses';
import LearningBenefits from './LearningBenefits';
import InstructorSection from './InstructorSection';
import Testimonials from './Testimonials';
import CTASection from './CTASection';

const Home = () => {
  return (
    <div className="space-y-6">
      <Hero />
      <HomeStats />
      <Categories />
      <FeaturedCourses />
      <LearningBenefits />
      <PopularCourses />
      <InstructorSection />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
