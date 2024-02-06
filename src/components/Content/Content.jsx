import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    {/* <ParticleHeaderBg /> */}
    <section className="inicio" id="inicio">
      <div className="titulo">
        <h1 data-aos="fade-up" data-aos-delay="500">
          <FormattedMessage id="namess" defaultMessage="Welcome to Tech Samurai!" />
        </h1>
        <p className="h_intro">At Tech Samurai, we are not just builders; we are architects of digital excellence. As a leading IT agency, we specialize in providing cutting-edge solutions that transcend conventional boundaries. With a passion for technology and a commitment to client success, we bring your ideas to life through a spectrum of services.</p>

        <div className="wrapper">
          <a
            className="button"
            href="https://join.skype.com/invite/vY0sad0ly5ca"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-skype"></i>
            </div>
            <span>Skype</span>
          </a>
          <a
            className="button"
            href="https://github.com/tech-ninja-lol/"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href="https://discord.gg/Pvd8E8zpMP"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-discord"></i>
            </div>
            <span>Discord</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </section>
  </div>
);

export default Content;
