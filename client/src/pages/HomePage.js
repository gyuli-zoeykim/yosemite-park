import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import DetailItem from '../components/DetailItems';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import logo_textGreen from '../images/logo_textGreen.png';

const HomePage = () => {
  const [customScale, setCustomScale] = useState(0);
  const [columnTwoY, setColumnTwoY] = useState(0);
  const [isIntroEntered, setIsIntroEntered] = useState(false);
  const [isSectionOneEntered, setIsSectionOneEntered] = useState(false);
  const [isSectionOneEffect, setIsSectionOneEffect] = useState(false);
  const [isSectionTwoEffect, setIsSectionTwoEffect] = useState(false);
  const [isSectionThreeEffect, setIsSectionThreeEffect] = useState(false);
  const [isSectionFourEffect, setIsSectionFourEffect] = useState(false);
  const [isFooterEffect, setIsFooterEffect] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const who = useRef(null);
  const what = useRef(null);
  const ourImpact = useRef(null);
  const history = useRef(null);

  useEffect(() => {
    setIsIntroEntered(true);

    const handleScroll = async () => {
      try {
        setIsLoading(true);
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scaledProgress = scrollY / (documentHeight - windowHeight);
        const scaledValue = Math.min(scaledProgress * 1.2, 0.5);
        setCustomScale(scaledValue * 100);
        const newY = Math.min(scaledProgress * 130, 82);
        setColumnTwoY(newY);
        const sectionOne = document.querySelector('.section-one');
        if (sectionOne) {
          setIsSectionOneEffect(true);
          const sectionOneRect = sectionOne.getBoundingClientRect();
          if (
            sectionOneRect.top <= windowHeight &&
            sectionOneRect.bottom >= 0
          ) {
            setIsSectionOneEntered(true);
          } else {
            setIsSectionOneEntered(false);
          }
        }

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sectionTwo = document.querySelector('.section-two');
    const sectionThree = document.querySelector('.section-three');
    const sectionFour = document.querySelector('.section-four');
    const footer = document.querySelector('.footer');

    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      if (!isSectionTwoEffect && sectionTwo) {
        const sectionTwoRect = sectionTwo.getBoundingClientRect();
        setIsSectionTwoEffect(
          sectionTwoRect.top <= windowHeight && sectionTwoRect.bottom >= 0
        );
      }

      if (!isSectionThreeEffect && sectionThree) {
        const sectionThreeRect = sectionThree.getBoundingClientRect();
        setIsSectionThreeEffect(
          sectionThreeRect.top <= windowHeight && sectionThreeRect.bottom >= 0
        );
      }

      if (!isSectionFourEffect && sectionFour) {
        const sectionFourRect = sectionFour.getBoundingClientRect();
        setIsSectionFourEffect(
          sectionFourRect.top <= windowHeight && sectionFourRect.bottom >= 0
        );
      }

      if (!isFooterEffect && sectionFour) {
        const footerRect = footer.getBoundingClientRect();
        setIsFooterEffect(
          footerRect.top <= windowHeight && footerRect.bottom >= 0
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    isSectionTwoEffect,
    isSectionThreeEffect,
    isSectionFourEffect,
    isFooterEffect,
  ]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header
        refs={{ who, what, ourImpact, history }}
        handleLogoClick={handleLogoClick}
      />
      <section className="page-home">
        {isLoading ? (
          <div className="empty">&nbsp;</div>
        ) : (
          <div className={`intro-home ${isIntroEntered ? 'entered' : ''}`}>
            <div className="intro-image"></div>
            <h2 className="intro-head">
              EXPLORE AND CONSERVE THE PARK YOU LOVE
            </h2>
            <p className="intro-text">YOSEMITE</p>
          </div>
        )}
        <div
          className={`who-we-are section-one container ${
            isSectionOneEffect ? 'effect' : ''
          }`}
          ref={who}>
          <div className="who-we-are column-one">
            <h3 className="section-title">Who We Are</h3>
            <figure className="who-we-are-image image">
              <img
                className="responsive-image"
                src="https://images.unsplash.com/photo-1562310503-a918c4c61e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="yosemite"
              />
            </figure>
          </div>
          <div
            className="who-we-are-description"
            style={{
              transition: 'transform 0.1 ease-out',
              transform: `translateY(${columnTwoY}px)`,
            }}>
            Yosemite Conservancy is a nonprofit dedicated to preserving Yosemite
            National Park's resources and providing enriching visitor
            experiences in the park. Our philanthropic partnership with Yosemite
            goes back 100 years.
          </div>
          <div
            className="sphere"
            style={{
              transition: 'transform 0.1s ease-out',
              transform: `translate(${-customScale}%, ${customScale}%) scale(${
                (customScale / 100) * 2
              })`,
            }}></div>
          <div
            className={`who-we-are column-three ${
              isSectionOneEntered ? 'entered' : 'exited'
            }`}>
            <div className="line"></div>
            <a
              className="who-we-are title"
              href="https://yosemite.org/about-us/"
              target="_blank"
              rel="noopener noreferrer">
              <span>Learn More</span>
              <span style={{ marginLeft: '5px' }}>➔</span>
            </a>
          </div>
        </div>
        <div
          className={`what-we-do section-two container ${
            isSectionTwoEffect ? 'effect' : ''
          }`}
          ref={what}>
          <div className="what-we-do row-one">
            <h3 className="section-title">What We Do</h3>
          </div>
          <div className="what-we-do row-two">
            <div className="what-we-do detail">
              <figure className="what-we-do-image image">
                <img
                  className="responsive-image"
                  src="https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                  alt="yosemite"
                />
              </figure>
              <div className="what-we-do-detail">
                <h5 className="detail-title">Yosemite Falls</h5>
              </div>
              <div className="what-we-do-detail">
                <p className="detail-text">
                  A much-needed project revamped the approach to Lower Yosemite
                  Fall, one of the Valley's most visited destinations,
                  dramatically improving the visitor experience and protecting
                  the surrounding ecosystem.
                </p>
              </div>
            </div>
            <div className="what-we-do detail">
              <figure className="what-we-do-image image">
                <img
                  className="responsive-image"
                  src="https://images.unsplash.com/photo-1602743118789-9bb32eda5047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="yosemite"
                />
              </figure>
              <div className="what-we-do-detail">
                <h5 className="detail-title">Scenic Overlooks</h5>
              </div>
              <div className="what-we-do-detail">
                <p className="detail-text">
                  A series of donor-funded restoration projects transformed four
                  classic Yosemite overlooks: Glacier Point, Tunnel View,
                  Olmsted Point and Half Dome View.
                </p>
              </div>
            </div>
            <div className="what-we-do detail">
              <figure className="what-we-do-image image">
                <img
                  className="responsive-image"
                  src="https://images.unsplash.com/photo-1625442827958-547189bc4e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80"
                  alt="yosemite"
                />
              </figure>
              <div className="what-we-do-detail">
                <h5 className="detail-title">Keeping Bears Wild</h5>
              </div>
              <div className="what-we-do-detail">
                <p className="detail-text">
                  Upgrade successful bear monitoring and tracking technology,
                  including GPS collars, and continue educating the public
                  through the ongoing maintenance of KeepBearsWild.org.
                </p>
              </div>
            </div>
          </div>
          <div className="what-we-do row-three">
            <a
              className="what-we-do title"
              href="https://yosemite.org/impact/iconic-and-past-projects/"
              target="_blank"
              rel="noopener noreferrer">
              <span>Learn More</span>
              <span style={{ marginLeft: '5px' }}>➔</span>
            </a>
          </div>
        </div>
        <div
          className={`areas-of-focus section-three container ${
            isSectionThreeEffect ? 'effect' : ''
          }`}
          ref={ourImpact}>
          <div className="areas-of-focus description">
            <div className="areas-of-focus">
              <h3 className="section-title">Areas of Focus</h3>
            </div>
            <p className="description-text">
              Every year, we fund critical work in Yosemite National Park. That
              work covers a variety of topics, from trail repairs to wildlife
              management to youth programs.
            </p>
          </div>
          <div className="areas-of-focus icons">
            <DetailItem />
            <DetailItem />
          </div>
        </div>
        <div
          className={`history section-four container ${
            isSectionFourEffect ? 'effect' : ''
          }`}
          ref={history}>
          <div className="history-title">
            <h4 className="section-title mobile">History</h4>
          </div>
          <div className="history-content">
            <figure className="history-image image">
              <img
                className="responsive-image"
                src="https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="yosemite"
              />
            </figure>
            <div className="right-side">
              <div className="history-title">
                <h4 className="section-title desktop">History</h4>
              </div>
              <p className="description-text">
                A century-long history of philanthropy and partnership in
                Yosemite National Park.
              </p>
              <a
                className="who-we-are title"
                href="https://yosemite.org/our-history/"
                target="_blank"
                rel="noopener noreferrer">
                <span>Learn More</span>
                <span style={{ marginLeft: '5px' }}>➔</span>
              </a>
            </div>
          </div>
        </div>
        <div className="gallery section-five">
          <div className="gallery-heading">
            <h3 className="section-title">Gallery</h3>
          </div>
          <div className="gallery-img-wrapper">
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1454982523318-4b6396f39d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="yosemite"
              />
            </div>
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1542773998-9325f0a098d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                alt="yosemite"
              />
            </div>
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1553368165-1e051cb08280?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="yosemite"
              />
            </div>
          </div>
          <div className="gallery-img-wrapper">
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1517054612019-1bf855127c43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80"
                alt="yosemite"
              />
            </div>
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1688166708991-ce8c5fcf5f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
                alt="yosemite"
              />
            </div>
          </div>
          <div className="gallery-img-wrapper">
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1516191726963-61dae894c237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="yosemite"
              />
            </div>
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1533189436791-fac0716f376f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="yosemite"
              />
            </div>
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1478718995235-ccd18eeff8c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2044&q=80"
                alt="yosemite"
              />
            </div>
          </div>
          <div className="gallery-img-wrapper">
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1494088391210-792bbadb00f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="yosemite"
              />
            </div>
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1556114492-0738d9d8a2cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="yosemite"
              />
            </div>
          </div>
          <div className="gallery-img-wrapper">
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1688362378155-bbb2d369b2c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="yosemite"
              />
            </div>
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1513351990348-3d341c6f40e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                alt="yosemite"
              />
            </div>
            <div className="gallery-img-item">
              <img
                src="https://images.unsplash.com/photo-1664348503110-5f29ba8a07e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1924&q=80"
                alt="yosemite"
              />
            </div>
          </div>
        </div>
        <div className={`footer ${isFooterEffect ? 'effect' : ''}`}>
          <div className="horizontal-line"></div>
          <div className="footer-wrapper-container">
            <div className="column mobile">
              <Link
                className="column-logo link-effect"
                onClick={handleLogoClick}>
                <img src={logo_textGreen} alt="text" />
              </Link>
            </div>
            <div className="footer-wrapper">
              <div className="column desktop">
                <Link
                  className="column-logo link-effect"
                  onClick={handleLogoClick}>
                  <img src={logo_textGreen} alt="text" />
                </Link>
              </div>
              <div className="column">
                <a
                  className="column-title link-effect"
                  href="https://www.google.com/maps/dir/Current+Location/9035+Village+Dr,+Yosemite+Valley,+CA+95389"
                  target="_blank"
                  rel="noopener noreferrer">
                  Find Us
                </a>
                <a
                  className="column-text link-effect"
                  href="https://www.google.com/maps/dir/Current+Location/9035+Village+Dr,+Yosemite+Valley,+CA+95389"
                  target="_blank"
                  rel="noopener noreferrer">
                  <div className="address">
                    9035 Village Dr
                    <br />
                    Yosemite Valley
                    <br />
                    CA 95389
                  </div>
                </a>
              </div>
              <div className="column">
                <p className="column-title">Reference</p>
                <div>
                  <a
                    className="column-text link-effect"
                    href="https://yosemite.org/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Yosemite
                  </a>
                </div>
                <div>
                  <a
                    className="column-text link-effect"
                    href="https://unsplash.com/s/photos/yosemite-national-park?orientation=landscape"
                    target="_blank"
                    rel="noopener noreferrer">
                    Unsplash
                  </a>
                </div>
                <div>
                  <a
                    className="column-text link-effect"
                    href="https://siteinspire.com/websites/11566-actionist-consulting-group"
                    target="_blank"
                    rel="noopener noreferrer">
                    Siteinspire
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
