import PageHero from '../../components/PageHero/PageHero.jsx';
import heroContactImage from '../../assets/images/hero-contact.jpg';
import './Contact.css';

function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title="Request a Quote or Consultation"
        subtitle="Whether you are a distributor, farm operator or agricultural consultant — we are here to help you find the right Agrosapro solution."
        imageSrc={heroContactImage}
      />
      <section className="contact-summary">
        <div className="contact-summary__inner container">
          <h2>Start the conversation</h2>
          <p>
            Tell us about your crop, soil, livestock, distribution, or remediation project, and we will help identify the
            Agrosapro preparation and dosage path that fits your conditions.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;
