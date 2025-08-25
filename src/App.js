import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create a hidden form and submit it to Zapier
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://hooks.zapier.com/hooks/catch/24339843/ut78ea3/';
      form.target = 'hidden-iframe';
      form.style.display = 'none';

      // Add form data
      const fields = {
        name: formData.name,
        email: formData.email,
        businessName: formData.businessName,
        timestamp: new Date().toISOString(),
        source: 'DOJMARK Assets Form'
      };

      Object.keys(fields).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = fields[key];
        form.appendChild(input);
      });

      // Create hidden iframe to receive response
      let iframe = document.getElementById('hidden-iframe');
      if (!iframe) {
        iframe = document.createElement('iframe');
        iframe.id = 'hidden-iframe';
        iframe.name = 'hidden-iframe';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
      }

      // Add form to page and submit
      document.body.appendChild(form);
      form.submit();

      // Remove form after submission
      setTimeout(() => {
        document.body.removeChild(form);
      }, 1000);

      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', businessName: '' });
      alert('Thank you for your submission! We\'ll be in touch soon.');
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="App">
      <div className="form-container">
        <div className="form-header">
          <h1>DOJMARK ASSETS</h1>
          <p>Get started with your business journey</p>
        </div>
        
        <form className="modern-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessName">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              placeholder="Enter your business name"
              required
              disabled={isSubmitting}
            />
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Get Started'}
          </button>

          {submitStatus === 'success' && (
            <div className="status-message success">
              ✓ Form submitted successfully!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error">
              ✗ There was an error. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
