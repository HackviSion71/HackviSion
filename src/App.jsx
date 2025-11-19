import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './componentes/navbar';
import Footer from './componentes/footer';
import Home from './componentes/home';
import Courses from './componentes/courses';
import About from './componentes/about';
import Testimonials from './componentes/testimonials';
import Features from './componentes/features';
import EnrollForm from './componentes/enrollform';
import ScrollToTop from './componentes/scrolltop';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar/>
        <Routes>
          <Route path="/HackviSion/" element={<Home/>}/>
          <Route path="/HackviSion/viewcourses" element={<Courses/>}/>
          <Route path="/HackviSion/about" element={<About/>}/>
          <Route path="/HackviSion/testimonials" element={<Testimonials/>}/>
          <Route path="/HackviSion/features" element={<Features/>}/>
          <Route path="/HackviSion/enroll" element={<EnrollForm/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
