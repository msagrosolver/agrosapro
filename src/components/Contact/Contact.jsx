import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact__inner container">
        <div className="contact__copy">
          <p className="eyebrow contact__eyebrow">Contact</p>
          <h2>Request a quote or consultation</h2>
          <p>
            Whether you are a distributor, farm operator or agricultural consultant, we are here to help you find the
            right Agrosapro solution. We respond within 24-48 business hours.
          </p>
        </div>

        <form className="contact__form" action="#" onSubmit={(event) => event.preventDefault()}>
          <label>
            Name
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            Company
            <input type="text" name="company" autoComplete="organization" />
          </label>
          <label>
            Email
            <input type="email" name="email" autoComplete="email" required />
          </label>
          <label>
            Country
            <input type="text" name="country" autoComplete="country-name" />
          </label>
          <label className="contact__message">
            Message
            <textarea name="message" rows="4" required />
          </label>
          <button className="button button--amber" type="submit">
            Send enquiry
          </button>
          <p className="contact__note">We will reply to your email within 24-48 hours.</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
