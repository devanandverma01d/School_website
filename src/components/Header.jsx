import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        {/* Navbar Start */}
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
                <Link to="/" className="navbar-brand">
                <h1 className="m-0 text-primary"><i className="fa fa-book-reader me-3" />S.U THE HORIZON</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav mx-auto">
                    <Link to="/" className="nav-item nav-link active">Home</Link>
                    <Link to="/about-us" className="nav-item nav-link">About Us</Link>
                    <Link to="/classes" className="nav-item nav-link">Classes</Link>
                    <div className="nav-item dropdown">
                    <Link to="/school-facility" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                        <Link to="/school-facility" className="dropdown-item">School Facilities</Link>
                        <Link to="/popular-teacher" className="dropdown-item">Popular Teachers</Link>
                        <Link to="/become-teacher" className="dropdown-item">Become A Teachers</Link>
                        <Link to="/appointment" className="dropdown-item">Make Appointment</Link>
                        <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                        <Link to="*" className="dropdown-item">404 Error</Link>
                    </div>
                    </div>
                    <Link to="/contact-us" className="nav-item nav-link">Contact Us</Link>
                </div>
                <Link to='' className="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i className="fa fa-arrow-right ms-3" /></Link>
                </div>
            </nav>
            {/* Navbar End */}
    </>
  )
}

export default Navbar