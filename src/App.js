

import Header from './Sections/header/Header';
import AboutMe from './Sections/Aboutme/AboutMe';
import Projects from './Sections/projects/Projects';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';
import LineDrop from './Components/Linedrop/Linedrop';
import Footer from './Sections/Footer/Footer';
import Calendly from './Components/Calendly/Calendly';
import './Styles/App.scss'




const App = () => {

// console.log(projects);
//   console.log(projects[0].photos[0]);

  return (
  <div className="App">
    <LineDrop/>
    <Header/>
    <AboutMe/>
    <Projects/>
    <Skills/>
    <Contact/>
    <Footer/>
    <Calendly/>
  </div>
  );
}

export default App;
