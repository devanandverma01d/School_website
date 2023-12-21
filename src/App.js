import Navbar from "./components/Header";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PopularTeacher from "./pages/PopularTeacher";
import BecomeTeacher from "./pages/BecomeTeacher";
import Appointment from "./pages/Appointment";
import Testimonial from "./pages/Testimonial";
import PageNotFound from "./pages/PageNotFound";
import Facility from "./pages/Facility";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/classes' element={<Classes />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/school-facility' element={<Facility />} />
        <Route path='/popular-teacher' element={<PopularTeacher />} />
        <Route path='/become-teacher' element={<BecomeTeacher />} />
        <Route path='/appointment' element={<Appointment />} />
        <Route path='/testimonial' element={<Testimonial />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
