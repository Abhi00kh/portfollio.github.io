import React from 'react';
import firewallImage from '../assets/blob.jpeg'; // Replace with the actual path to your image
import tutorialImage from '../assets/download (7).jpeg'; // Replace with the actual path to your image

const Project = () => {
  return (
    <div style={styles.container}>
      {/* Slide 1 */}
      <div style={styles.slide1}>
        <h1 style={styles.title}>MY Projects</h1>
      </div>

      {/* Project 1 */}
      <div style={styles.splitSection}>
        {/* Image Section */}
        <div style={styles.imageContainer}>
          <img src={firewallImage} alt="Firewall WAF" style={styles.image} />
        </div>

        {/* Text Section */}
        <div style={styles.textContainer}>
          <h2 style={styles.subtitle}>Deep Learning-Based Web Application Firewall</h2>
          <p style={styles.description}>
            A deep learning-based web security firewall developed in March 2023. It detects and prevents attacks (XSS, SQL Injection, DOS, command injection, file inclusion) with 95% accuracy. Built with Flask and MongoDB for the backend, and HTML, CSS, and JavaScript for the frontend. Utilizes Convolutional Neural Networks (CNNs).
          </p>
          <button style={styles.button} onClick={() => window.open('https://github.com/your-repo', '_blank')}>
            View on GitHub
          </button>
        </div>
      </div>

      {/* Project 2 */}
      <div style={styles.splitSection}>
        {/* Text Section */}
        <div style={styles.textContainer}>
          <h2 style={styles.subtitle}>Python Tutorial Website</h2>
          <p style={styles.description}>
            Created a Python tutorial website from June 2024 to July 2024, focusing on user-friendly design and smooth performance across different devices. Built using React JS.
          </p>
          <button style={styles.button} onClick={() => window.open('https://github.com/Abhi00kh/my-python-tutorial', '_blank')}>
            View on GitHub
          </button>
        </div>

        {/* Image Section */}
        <div style={styles.imageContainer}>
          <img src={tutorialImage} alt="Python Tutorial Website" style={styles.image} />
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
    backgroundColor: '#ffc107', // Yellow background
    marginBottom: '20px',
  },
  title: {
    fontSize: '42px',
    fontWeight: 'bold',
    color: '#333', // Dark gray color for the text
  },
  splitSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#fff',
    marginBottom: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    flex: 0.8,
    paddingRight: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  textContainer: {
    flex: 1,
    paddingLeft: '20px',
  },
  subtitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#555',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#007bff', // Primary blue color
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3', // Darker blue on hover
  },
};

export default Project;
