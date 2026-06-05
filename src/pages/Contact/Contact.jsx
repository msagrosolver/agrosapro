import PageHero from '../../components/PageHero/PageHero.jsx';
import './Contact.css';

function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Get in touch"
        title="Request a Quote or Consultation"
        subtitle="Whether you are a distributor, farm operator or agricultural consultant — we are here to help you find the right Agrosapro solution."
      />
      <section className="page-placeholder">
        <div className="page-placeholder__inner container">
          <h2>Start the conversation</h2>
          <p>
            This placeholder section is ready for dedicated contact details, inquiry forms, and commercial onboarding
            content once the page is expanded.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Contact;