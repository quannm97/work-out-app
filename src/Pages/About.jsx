import React from 'react'
import HeroPages from '../components/HeroPages'
import AboutMain from '../images/about/main.jpg'
import Footer from '../components/Footer'
import PlansTrainer from '../components/PlansTrainer'
import Logo1 from "../images/about/logo1.jpg"
import Logo2 from "../images/about/logo2.jpg"
import Logo3 from "../images/about/logo3.jpg"
const About = () => {
  return (
    <>
    <section className="about-page">
        <HeroPages name="About" />
        <div className="container">
          <div className="about-main">
            <img
              className="about-main__img"
              src={AboutMain}
              alt="car-renting"
            />
            <div className="about-main__text">
              <h3>About Company</h3>
              <h2>You start the engine and your adventure begins</h2>
              <p>
                Certain but she but shyness why cottage. Guy the put instrument
                sir entreaties affronting. Pretended exquisite see cordially the
                you. Weeks quiet do vexed or whose. Motionless if no to
                affronting imprudence no precaution. My indulged as disposal
                strongly attended.
              </p>
              <div className="about-main__text__icons">
                <div className="about-main__text__icons__box">
                <img src={Logo1} alt="logo-1" />

                 
                </div>
                <div className="about-main__text__icons__box">
                <img src={Logo2} alt="logo-2" />


                  
                </div>
                <div className="about-main__text__icons__box">
                <img src={Logo3} alt="logo-3" />


                
                </div>
              </div>
            </div>
          </div>
          <PlansTrainer />
        </div>
      </section>
      <div className="trainer-banner">
        <div className="trainer-banner__overlay"></div>
        <div className="container">
          <div className="text-content">
            <h2>Book a schedule by getting in touch with us</h2>
            <span>
              <i className="fa-solid fa-phone"></i>
              <h3>(84) 123-456</h3>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About