

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Sections/header/Header';
import AboutMe from './Sections/Aboutme/AboutMe';
import Projects from './Sections/projects/Projects';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact';
import LineDrop from './Components/Linedrop/Linedrop';
import Footer from './Sections/Footer/Footer';
import Calendly from './Components/Calendly/Calendly';
import CopyrightCookies from './Sections/CopyrightCookies/CopyrightCookies';
import UberUns from './Sections/UberUns/UberUns';
import Modal from './Components/Modal/Modal';
import { useState } from 'react';
import './Styles/App.scss'
import store from './redux/store';
import { Provider } from 'react-redux';



const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalParams, setModalParams] = useState({ title: '', content: '' });

  const openModalWithParams = (title, content) => {
    setModalParams({ title, content }); // Set modal params (title, content)
    setIsModalOpen(true); // Open modal
  };

  return (
    <Provider store={store}>
    <Router>
    <div className="App" >
      <Routes>
        <Route
          path="/"
          element={
            <>
            <LineDrop />
            <Header openModalWithParams={openModalWithParams} 
             />
            <AboutMe />
            <Projects />
            <UberUns />
            <Skills />
            <Contact />
            </>
          }
        />
        <Route path="/copyright-cookies" element={<CopyrightCookies/>} />
      </Routes>
      <Footer />
      {/* <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={modalParams.title} 
        content={modalParams.content} 
      /> */}
    </div>
  </Router>
  </Provider>
  );
}

export default App;
