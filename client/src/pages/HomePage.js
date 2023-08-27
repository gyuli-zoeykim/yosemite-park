import React, { useState, useEffect, useRef } from 'react';
import './HomePage.css';
import DetailItem from '../components/DetailItems';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
  const [customScale, setCustomScale] = useState(0);
  const [columnTwoY, setColumnTwoY] = useState(0);
  const [isSectionOneEntered, setIsSectionOneEntered] = useState(false);
  const who = useRef(null);
  const what = useRef(null);
  const ourImpact = useRef(null);
  const history = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scaledProgress = scrollY / (documentHeight - windowHeight);
      const scaledValue = Math.min(scaledProgress * 1.2, 0.5);
      setCustomScale(scaledValue * 100);
      const newY = Math.min(scaledProgress * 130, 82);
      setColumnTwoY(newY);
      console.log('window', windowHeight);
      const sectionOne = document.querySelector('.section-one');
      if (sectionOne) {
        const sectionOneRect = sectionOne.getBoundingClientRect();
        console.log(sectionOneRect);
        if (sectionOneRect.top <= windowHeight && sectionOneRect.bottom >= 0) {
          setIsSectionOneEntered(true);
        } else {
          setIsSectionOneEntered(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('s', customScale);

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
        <div className="intro-home">
          <h2 className="intro-head">EXPLORE AND CONSERVE THE PARK YOU LOVE</h2>
          <p className="intro-text">YOSEMITE</p>
        </div>
        <div className="who-we-are section-one container" ref={who}>
          <div className="who-we-are column-one">
            <h3 className="section-title">Who We Are</h3>
            <figure className="who-we-are image">
              <img
                className="responsive-image"
                src="https://images.unsplash.com/photo-1562310503-a918c4c61e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="yosemite"
              />
            </figure>
          </div>
          <div
            className="who-we-are column-two"
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
        <div className="what-we-do section-two container" ref={what}>
          <div className="what-we-do row-one">
            <h3 className="section-title">What We Do</h3>
          </div>
          <div className="test row-two">
            <div className="what-we-do detail">
              <figure className="what-we-do image">
                <img
                  className="responsive-image"
                  src="https://images.unsplash.com/photo-1441239372925-ac0b51c4c250?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                  alt="yosemite"
                />
              </figure>
              <div>
                <h5 className="detail-title">Yosemite Falls</h5>
              </div>
              <div>
                <p className="detail-text">
                  A much-needed project revamped the approach to Lower Yosemite
                  Fall, one of the Valley's most visited destinations,
                  dramatically improving the visitor experience and protecting
                  the surrounding ecosystem.
                </p>
              </div>
            </div>
            <div className="what-we-do detail">
              <figure className="what-we-do image">
                <img
                  className="responsive-image"
                  src="https://images.unsplash.com/photo-1602743118789-9bb32eda5047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="yosemite"
                />
              </figure>
              <div>
                <h5 className="detail-title">Scenic Overlooks</h5>
              </div>
              <div>
                <p className="detail-text">
                  A series of donor-funded restoration projects transformed four
                  classic Yosemite overlooks: Glacier Point, Tunnel View,
                  Olmsted Point and Half Dome View.
                </p>
              </div>
            </div>
            <div className="what-we-do detail">
              <figure className="what-we-do image">
                <img
                  className="responsive-image"
                  src="https://images.unsplash.com/photo-1625442827958-547189bc4e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1664&q=80"
                  alt="yosemite"
                />
              </figure>
              <div>
                <h5 className="detail-title">Keeping Bears Wild</h5>
              </div>
              <div>
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
        <div className="areas-of-focus section-three container" ref={ourImpact}>
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
        <div className="history section-four container" ref={history}>
          <div className="block">
            <figure className="image">
              <img
                className="responsive-image"
                src="https://images.unsplash.com/photo-1498429089284-41f8cf3ffd39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="yosemite"
              />
            </figure>
            <div className="right-side">
              <div className="history-title">
                <h4 className="section-title">History</h4>
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
        <Footer handleLogoClick={handleLogoClick} />
      </section>
    </>
  );
};

export default HomePage;
