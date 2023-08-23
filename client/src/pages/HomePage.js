import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <section className="page-home">
      <div className="intro-home">
        <h2 className="intro-head">EXPLORE AND CONSERVE THE PARK YOU LOVE</h2>
        <p className="intro-text">YOSEMITE</p>
      </div>
      <div className="who-we-are container">
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
        <div className="who-we-are column-two ratio-two">
          Yosemite Conservancy is a nonprofit dedicated to preserving Yosemite
          National Park's resources and providing enriching visitor experiences
          in the park. Our philanthropic partnership with Yosemite goes back 100
          years.
        </div>
        <div className="who-we-are column-three ratio-one">
          <div className="line"></div>
          <Link className="who-we-are title" to="/">
            <span>Learn More</span>
            <span style={{ marginLeft: '5px' }}>➔</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
