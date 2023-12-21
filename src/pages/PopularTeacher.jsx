import React from 'react'
import { Link } from 'react-router-dom'

const PopularTeacher = () => {
  return (
    <>
      <div className="container-xxl bg-white p-0">
      {/* Page Header End */}
      <div className="container-xxl py-5 page-header position-relative mb-5">
        <div className="container py-5">
          <h1 className="display-2 text-white animated slideInDown mb-4">Popular Teachers</h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              <li className="breadcrumb-item"><Link to="">Pages</Link></li>
              <li className="breadcrumb-item text-white active" aria-current="page">Teachers</li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: 600}}>
            <h1 className="mb-3">Popular Teachers</h1>
            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit
              eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src="assets/img/team-1.jpg" alt="mg" />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src="assets/img/team-2.jpg" alt="mg" />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src="assets/img/team-3.jpg" alt="mg" />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src="assets/img/team-1.jpg" alt="mg" />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src="assets/img/team-2.jpg" alt="mg" />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item position-relative">
                <img className="img-fluid rounded-circle w-75" src="assets/img/team-3.jpg" alt="mg" />
                <div className="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div className="d-flex align-items-center">
                    <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-primary  mx-1" href><i className="fab fa-instagram" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End */}
      {/* Back to Top */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
      </div>
    </>
  )
}

export default PopularTeacher