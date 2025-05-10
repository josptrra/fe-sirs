'use client';
import '../../globals.css';
import Header from '@/components/landingpage/top-header';
import Navbar from '@/components/landingpage/Navbar';
import HeroSection from '@/components/landingpage/HeroSection';
import Footer from '@/components/landingpage/Footer';
import Services from '@/components/landingpage/Services';
import AboutUs from '@/components/landingpage/AboutUs';
import Doctors from '@/components/landingpage/Doctors';

export default function RootLayout({ children }) {
  return (
    <main>
      <Header />
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <Doctors />
      <Footer />
      {children}
    </main>
  );
}
