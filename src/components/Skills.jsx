import React from 'react';
import skillsImage from '../assets/download (8).jpeg'; 

const Skills = () => {
  return (
    <div style={styles.container}>
      {/* Slide 1 */}
      <div style={styles.slide1}>
        <h1 style={styles.title}>My Skills</h1>
      </div>

      {/* Slide 2 */}
      <div style={styles.slide2}>
        <div style={styles.imageContainer}>
          <img
            src={skillsImage}
            alt="Skills"
            style={styles.image}
          />
        </div>
        <div style={styles.skillsContainer}>
          <h2 style={styles.skill}>Programming Languages: Python, C++</h2>
          <h2 style={styles.skill}>Web Development: HTML, CSS, JavaScript, React.js, Flask</h2>
          <h2 style={styles.skill}>Database Management: MySQL, MongoDB</h2>
          <h2 style={styles.skill}>Machine Learning: TensorFlow, Scikit-learn</h2>
          <h2 style={styles.skill}>Data Structures and Algorithms</h2>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f4f4f4',
    padding: '20px',
  },
  slide1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh',
    backgroundColor: '#ffc107',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'transform 0.3s ease-in-out',
    transform: 'scale(1)',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#333',
    letterSpacing: '1px',
  },
  slide2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    transition: 'box-shadow 0.3s ease-in-out',
    ':hover': {
      boxShadow: '0 6px 18px rgba(0, 0, 0, 0.25)',
    },
  },
  imageContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '40px',
    transition: 'transform 0.3s ease-in-out',
  },
  image: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
  skillsContainer: {
    flex: 2,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  skill: {
    fontSize: '22px',
    marginBottom: '15px',
    color: '#333',
    lineHeight: '1.6',
    position: 'relative',
    padding: '5px 0',
    transition: 'color 0.3s ease-in-out',
  },
  skillHover: {
    color: '#ffc107',
  },
  '@media (max-width: 768px)': {
    slide2: {
      flexDirection: 'column',
      textAlign: 'center',
    },
    imageContainer: {
      marginBottom: '20px',
      marginRight: '0',
    },
  },
};

export default Skills;
