import React from 'react';
import heroImage from '../assets/World Night2.jpg'; // Replace with your image path
import aboutImage from '../assets/about.jpg'; // Replace with your about section image path

function Hero() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          textAlign: 'center',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
        }}
      >
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>

        <div style={{ position: 'relative' }}>
          <h1 className="hero__heading" style={{ fontSize: '3rem', marginBottom: '10px' }}>
            Abhijit Khule
          </h1>
          <p className="hero__text" style={{ fontSize: '1.5rem', marginTop: '10px' }}>
            Software Engineer
          </p>
          <p className="hero__intro" style={{ fontSize: '1.2rem', marginTop: '10px' }}>
    Passionate about building scalable web applications and working with modern technologies.
  </p>
        </div>
      </div>

      {/* About Section */}
      <div
        className="split-section"
        style={{
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
        }}
      >
        <div
          className="split-section__left"
          style={{
            flex: '1',
            backgroundImage: `url(${aboutImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '60vh',
          }}
        ></div>
        <div
          className="split-section__right"
          style={{
            flex: '1',
            padding: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}
        >
          <div style={{ maxWidth: '500px' }}>
      
            <p style={{ fontSize: '1.3rem', lineHeight: '1.5', color: '#333' }}>
              Hello! I'm Abhijit Khule, a passionate Full Stack Developer and Data Analyst based in Nashik, India. With a
              strong foundation in Web Development, Data Analytics, and Cloud Computing, I thrive on building efficient
              and innovative solutions. My journey in tech began with a deep curiosity for problem-solving, leading me
              to pursue various certifications, including the Certified Full Stack Web Developer. I've honed my skills through hands-on projects and internships, like my
              experience as a .NET Developer Intern, where I developed a code editor for Python and C++.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;

