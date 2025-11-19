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

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/HackviSion/" element={<Home/>}/>
          <Route path="/viewcourses" element={<Courses/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/testimonials" element={<Testimonials/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/enroll" element={<EnrollForm/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
