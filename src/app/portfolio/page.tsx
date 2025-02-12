
import Hero from '@/app/Hero/Hero'
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>

      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
