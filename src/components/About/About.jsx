import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hey, I am Evan Pavone and I just finished my software engineering bootcamp at Flatiron and I am eager to start my career.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'A little about me outside of programming: I love to play video games, which is a reason I wanted to be a programmer, I love to go hiking, walk my dog Joey, and occasionaly like to brewery hop with my family. I have been to Costa Rica many times (I lost track) as a volunteer to help people in need. I have also worked in the fast-food industry at various places since graduating high school.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Leveraging my experience in the fast-food industry, along with a decade of volunteer work in Costa Rica. I am agile, resourceful, timely and organized. I am an up-and-coming software developer who is passionate about coding. I am experienced in Ruby on Rails, JavaScript-based programming, HTML and CSS'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
