import React from 'react';
import './GalleryPage.css';
import { Link } from 'react-router-dom';
import logo_iconGreen from '../images/logo_iconGreen.png';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="header">
        <div className="logo-icon-wrapper">
          <Link className="title" to="/" onClick={scrollToTop}>
            <img className="logo-icon" src={logo_iconGreen} alt="Logo" />
          </Link>
        </div>
      </div>
      <div className="gallery">
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
        <Footer scrollToTop={scrollToTop} />
      </div>
    </>
  );
};

export default GalleryPage;
