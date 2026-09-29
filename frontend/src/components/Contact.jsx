// Contact.jsx - Beginner-friendly contact form with API integration
import { useState } from 'react';

// API endpoint URL for backend (uses relative /api/contact on Vercel, or custom VITE_API_URL if configured)
const API_URL = import.meta.env.VITE_API_URL || '/api/contact';

export default function Contact() {
  // 1. Simple form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // 2. Loading state for submit button
  const [isLoading, setIsLoading] = useState(false);

  // 3. Notification state for toast message
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('success'); // 'success' or 'error'

  // Helper to show a notification popup for 5 seconds
  const showNotification = (text, type = 'success') => {
    setToastMessage(text);
    setToastType(type);
    setTimeout(() => {
      setToastMessage('');
    }, 5000);
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!name.trim()) return showNotification('Please enter your name.', 'error');
    if (!email.trim()) return showNotification('Please enter your email address.', 'error');
    if (!message.trim()) return showNotification('Please enter a message.', 'error');

    setIsLoading(true);

    try {
      // Send form data to backend server API
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        showNotification('✅ ' + data.message, 'success');
        // Clear input fields on success
        setName('');
        setEmail('');
        setMessage('');
      } else {
        showNotification('⚠️ ' + (data.error || 'Something went wrong. Please try again.'), 'error');
      }
    } catch (err) {
      showNotification('❌ Could not reach backend server. Make sure server is running.', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>

      <div className="container">
        <div className="row g-4">
          {/* Left Column: Contact Cards */}
          <div className="col-12 col-md-6" data-aos="fade-right">
            <div className="contact-info-card h-100">
              <h3>Get In Touch</h3>
              <p className="contact-subtitle">
                Feel free to reach out for collaborations, project inquiries, or just to say hi! I'm always open to discussing new ideas or interesting opportunities.
              </p>
              
              <div className="contact-methods">
                <div className="contact-method-item">
                  <div className="method-icon"><i className="fas fa-envelope"></i></div>
                  <div className="method-details">
                    <span>Email Me</span>
                    <a href="mailto:sivadinesh872@gmail.com">sivadinesh872@gmail.com</a>
                  </div>
                </div>
                <div className="contact-method-item">
                  <div className="method-icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="method-details">
                    <span>Call Me</span>
                    <a href="tel:+919940375646">(+91) 9940375646</a>
                  </div>
                </div>
                <div className="contact-method-item">
                  <div className="method-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="method-details">
                    <span>Location</span>
                    <p>Chennai, Tamilnadu, India</p>
                  </div>
                </div>
              </div>

              <div className="contact-status-box">
                <span className="status-indicator-dot"></span>
                <span className="status-text">Available for Freelance & Full-time Roles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-12 col-md-6" data-aos="fade-left" data-aos-delay="200">
            <div className="contact-form-card h-100">
              <h3>Send A Message</h3>
              <form onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                  <i className="fas fa-user input-icon"></i>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group">
                  <i className="fas fa-envelope input-icon"></i>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-group text-group">
                  <i className="fas fa-comment-alt input-icon"></i>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn" disabled={isLoading}>
                  <span>{isLoading ? 'Sending…' : 'Send Message'}</span>
                  <i className={isLoading ? 'fas fa-spinner fa-spin' : 'fas fa-paper-plane'}></i>
                </button>
              </form>

              {/* Toast Notification Box */}
              {toastMessage && (
                <div className={`contact-toast contact-toast--${toastType} contact-toast--visible`} style={{ display: 'block' }}>
                  {toastMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
