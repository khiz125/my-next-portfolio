import Nav from '../components/Nav';
import Site from './Site';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import JobHistory from './JobHistory';
import Footer from './Footer';
import { useRouter } from "next/router";
import { useLocale } from "../hooks/useLocale"


const Portfolio = () => {

  const { t, locale } = useLocale();
  const router = useRouter();

  return (
    <>
      <Nav />
      <Site />
      <About />
      <Projects />
      <Skills />
      <JobHistory />
      <Footer />
    </>
  )
}

export default Portfolio
