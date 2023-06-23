import React from 'react'
import HeroPages from '../components/HeroPages'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'

const TestimonialPage = () => {
  return (
    <>
      <section className="testimonial-page">
        <HeroPages name="Testimonials" />
        <Testimonials />
        <div className="trainer-banner">
          <div className="trainer-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(84) 123-456</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  )
}

export default TestimonialPage