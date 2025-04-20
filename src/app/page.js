import React from 'react';
import Header from '@/components/landingpage/top-header';
import Navbar from '@/components/landingpage/Navbar';
import HeroSection from '@/components/landingpage/HeroSection';
import OurServices from '@/components/landingpage/OurServices';

export default function page() {
  return (
    <>
      <Header />
      <Navbar />
      <HeroSection />
      <OurServices />
    </>
  );
}
