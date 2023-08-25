import React, { useState, useEffect } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import DetailItem from '../components/DetailItems';

const HomePage = () => {
  const [customScale, setCustomScale] = useState(0);
  const [columnTwoY, setColumnTwoY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scaledProgress = scrollY / (documentHeight - windowHeight);
      setCustomScale(scaledProgress);
      const newY = scaledProgress * 82;
      setColumnTwoY(newY);

      console.log(scrollY, windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="page-home">
      <div className="intro-home">
        <h2 className="intro-head">EXPLORE AND CONSERVE THE PARK YOU LOVE</h2>
        <p className="intro-text">YOSEMITE</p>
      </div>
      <div className="who-we-are section-one container">
        <div className="who-we-are column-one">
          <h2 className="section-title">Who We Are</h2>
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
          National Park's resources and providing enriching visitor experiences
          in the park. Our philanthropic partnership with Yosemite goes back 100
          years.
        </div>
        <div
          className="sphere"
          style={{
            transition: 'transform 0.1s ease-out',
            transform: `translate(${(0.5 - customScale) * 100}%, ${
              (customScale - 0.5) * 100
            }%) scale(${customScale})`,
          }}></div>
        <div className="who-we-are column-three">
          <div className="line"></div>
          <Link className="who-we-are title" to="/">
            <span>Learn More</span>
            <span style={{ marginLeft: '5px' }}>➔</span>
          </Link>
        </div>
      </div>
      <div className="what-we-do section-two container">
        <div className="what-we-do row-one">
          <h3 className="section-title">What We Do</h3>
        </div>
        <div className="what-we-do row-two">
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
                Fall, one of the Valley’s most visited destinations,
                dramatically improving the visitor experience and protecting the
                surrounding ecosystem.
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
                classic Yosemite overlooks: Glacier Point, Tunnel View, Olmsted
                Point and Half Dome View.
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
                including GPS collars, and continue educating the public through
                the ongoing maintenance of KeepBearsWild.org.
              </p>
            </div>
          </div>
        </div>
        <div className="what-we-do row-three">
          <Link className="what-we-do title" to="/">
            <span>Learn More</span>
            <span style={{ marginLeft: '5px' }}>➔</span>
          </Link>
        </div>
      </div>
      <div className="areas-of-focus section-three container">
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
      <div className="history section-four container">
        <div className="block">
          <figure className="image">
            <img
              className="responsive-image"
              src="https://images.unsplash.com/photo-1562310503-a918c4c61e38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="yosemite"
            />
          </figure>
          <div className="right-side">
            <div className="history-title">
              <h3 className="section-title">History</h3>
            </div>
            <p className="description-text">
              A century-long history of philanthropy and partnership in Yosemite
              National Park.
            </p>
            <Link className="who-we-are title" to="/">
              <span>Learn More</span>
              <span style={{ marginLeft: '5px' }}>➔</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="horizontal-line"></div>
        <div className="footer-wrapper">
          <Link className="who-we-are title" to="/">
            YOSEMITE
          </Link>
          <div className="column">
            <Link className="who-we-are title" to="/">
              Find Us
            </Link>
            <Link className="who-we-are title" to="/">
              <div className="address">
                9035 Village Dr
                <br />
                Yosemite Valley
                <br />
                CA 95389
              </div>
            </Link>
          </div>
          <div className="column">
            <p>Reference</p>
            <div>
              <Link to="https://yosemite.org/">Yosemite</Link>
            </div>
            <div>
              <Link to="https://unsplash.com/s/photos/yosemite-national-park?orientation=landscape">
                Unsplash
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
