import StarBackground from "@/app/StarBackground/page"
import Hero from '@/app/Hero/Hero'
import Navbar from '../components/Navbar';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
        <StarBackground>
      <Navbar />
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      </StarBackground>
    </div>
  );
}