import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';

function Footer() {
  return (
    <footer className="text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="h4 text-decoration-underline mb-3">Média linkek:</h5>
            <div className="social-media">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="3x" className="text mr-3" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} size="3x" className="text mr-3" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="3x" className="text" />
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#contacts" className="text-white">
                  Contacts
                </a>
              </li>
              <li>
                <a href="#about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#appointment" className="text-white">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: example@example.com</p>
            <p>Phone: +1 123-456-7890</p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
