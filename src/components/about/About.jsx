import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { TbAward } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { TbFolders } from "react-icons/tb";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="my images" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <p className="about__icon">
                <TbAward />
              </p>

              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <p className="about__icon">
                <FiUsers />
              </p>

              <h5>Clients</h5>
              <small>300+ Clients Worlwide</small>
            </article>

            <article className="about__card">
              <p className="about__icon">
                <TbFolders />
              </p>
              <h5>Projects</h5>
              <small>80+ Completed project</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            natus distinctio magnam dolores, accusamus nisi nulla ea blanditiis
            facilis culpa cupiditate at ipsa quasi veritatis modi maxime
            voluptate voluptates iusto quae a. Nesciunt fuga beatae fugit? Nihil
            adipisci itaque saepe!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
