import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12 col-lg-6 mb-4 mb-lg-0">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Név
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                E-mail cím
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Telefonszám
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Üzenet
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Küldés
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="col-md-12 col-lg-6">
          <div className="contact-info">
            <h3>Elérhetőségeink</h3>
            <p>
              <strong>Telefon:</strong> +36301234567
            </p>
            <p>
              <strong>Cím:</strong> 1531 Miskolc Aba utca 19.
            </p>
            <p>
              <strong>Nyitvatartás:</strong> Hétfő-Péntek: 10:00 - 18:00, Szombat-Vasárnap: 10:00 - 16:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
