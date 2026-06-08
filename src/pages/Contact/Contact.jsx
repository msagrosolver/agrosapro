import { useEffect, useRef, useState } from 'react';
import heroContactImage from '../../assets/images/hero-contact.jpg';
import './Contact.css';

const initialForm = {
  name: '',
  company: '',
  email: '',
  country: '',
  message: '',
};

function Contact() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  useEffect(() => {
    const target = sectionRef.current;
    if (!target) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((currentForm) => ({ ...currentForm, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setForm(initialForm);
    setStatus('success');
    setError('');
  };

  return (
    <main className="contact-page" style={{ '--contact-image': `url(${heroContactImage})` }}>
      <section
        ref={sectionRef}
        className={`contact-container ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="contact-info">
          <p className="contact-eyebrow">Contact</p>
          <h1>Request a quote or consultation</h1>
          <p className="contact-intro">
            Tell us about your crop, soil, livestock, distribution, or remediation project. We will help identify the
            Agrosapro preparation and dosage path that fits your conditions.
          </p>

          <div className="contact-divider" />

          <a className="contact-email" href="mailto:info@agrosapro.eu">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6.5h16v11H4z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
              <path
                d="m5 7 7 6 7-6"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>info@agrosapro.eu</span>
          </a>

          <div className="contact-points" aria-label="Contact highlights">
            <span>European partners</span>
            <span>Farm operators</span>
            <span>24-48 hour reply</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label className="contact-field" style={{ '--field-delay': '0.25s' }}>
            <span>Full Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact-field" style={{ '--field-delay': '0.35s' }}>
            <span>Company</span>
            <input
              name="company"
              type="text"
              autoComplete="organization"
              value={form.company}
              onChange={handleChange}
            />
          </label>

          <label className="contact-field" style={{ '--field-delay': '0.45s' }}>
            <span>Email</span>
            <input
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="contact-field" style={{ '--field-delay': '0.55s' }}>
            <span>Country</span>
            <input
              name="country"
              type="text"
              autoComplete="country-name"
              value={form.country}
              onChange={handleChange}
            />
          </label>

          <label className="contact-field contact-field--message" style={{ '--field-delay': '0.65s' }}>
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="5"
              required
            />
          </label>

          {error && <p className="contact-error">{error}</p>}

          {status === 'success' ? (
            <div className="contact-success" role="status">
              <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 11.1V12a9 9 0 1 1-5.3-8.2"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="m9 11 3 3L22 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Thank you. We will be in touch soon.</span>
            </div>
          ) : (
            <>
              <button type="submit" className="contact-submit">
                Send enquiry
              </button>
              <p className="contact-privacy">We use your details only to respond to this enquiry.</p>
            </>
          )}
        </form>
      </section>
    </main>
  );
}

export default Contact;
