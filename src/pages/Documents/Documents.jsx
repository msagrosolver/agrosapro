import PageHero from '../../components/PageHero/PageHero.jsx';
import './Documents.css';

const documents = [
  {
    id: 1,
    title: 'Agrosapro Product Brochure',
    description:
      'Full overview of all Agrosapro product lines — soil conditioners, growth regulators and feed additives.',
    filename: 'agrosapro-brochure.pdf',
    type: 'PDF',
    size: '—',
  },
  {
    id: 2,
    title: 'Agrosapro Biome — Technical Sheet',
    description:
      'Detailed composition, application rates and usage guidelines for Agrosapro Biome soil conditioner.',
    filename: 'agrosapro-biome-techsheet.pdf',
    type: 'PDF',
    size: '—',
  },
  {
    id: 3,
    title: 'Agrosapro pHoenix — Technical Sheet',
    description:
      'Detailed composition, application rates and usage guidelines for Agrosapro pHoenix soil conditioner.',
    filename: 'agrosapro-phoenix-techsheet.pdf',
    type: 'PDF',
    size: '—',
  },
  {
    id: 4,
    title: 'Agrosapro K — Technical Sheet',
    description:
      'Detailed composition, application rates and usage guidelines for Agrosapro K growth regulator.',
    filename: 'agrosapro-k-techsheet.pdf',
    type: 'PDF',
    size: '—',
  },
  {
    id: 5,
    title: 'Agrosapro Complex — Technical Sheet',
    description:
      'Detailed composition, application rates and usage guidelines for Agrosapro Complex growth regulator.',
    filename: 'agrosapro-complex-techsheet.pdf',
    type: 'PDF',
    size: '—',
  },
  {
    id: 6,
    title: 'Agrosapro BioNa — Technical Sheet',
    description:
      'Detailed composition, application rates and dosing guidelines for Agrosapro BioNa feed additive.',
    filename: 'agrosapro-biona-techsheet.pdf',
    type: 'PDF',
    size: '—',
  },
];

function Documents() {
  return (
    <main>
      <PageHero
        eyebrow="Resources"
        title="Documents"
        subtitle="Download technical sheets, brochures and product documentation for all Agrosapro preparations."
        breadcrumbs={[{ label: 'Documents', to: '/documents' }]}
      />

      <section className="documents-section">
        <div className="documents-inner">
          <p className="documents-note">
            Files will be available for download once uploaded. Contact us at{' '}
            <a href="mailto:info@agrosapro.eu">info@agrosapro.eu</a> to request any document.
          </p>

          <div className="documents-grid">
            {documents.map((doc) => (
              <div key={doc.id} className="document-card">
                <div className="document-card__icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="document-card__body">
                  <h3>{doc.title}</h3>
                  <p>{doc.description}</p>
                  <div className="document-card__meta">
                    <span className="document-card__type">{doc.type}</span>
                  </div>
                </div>
                <div className="document-card__action">
                  <a
                    href={`/downloads/${doc.filename}`}
                    download
                    className="document-card__download"
                    aria-label={`Download ${doc.title}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Documents;
