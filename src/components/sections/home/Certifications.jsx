import mastersCertificate from "../../../assets/masters-eu-business-school.jpg";
import ucamCertificate from "../../../assets/ucam-certification.jpg";
import awsCloudGraduate from "../../../assets/aws-cloud-graduate.png";
import awsCloudPractitioner from "../../../assets/aws-cloud-practitioner.png";
import migracodeAws from "../../../assets/migracode-aws-cloud-computing.png";
import migracodeWebDev from "../../../assets/WebDev_Ifeoma_Completion.png";
import mckinseyForward from "../../../assets/mckinsey-forward-program.png";

const certifications = [
  {
    title: "Master's in Business Management",
    issuer: "EU Business School",
    year: "Completed",
    image: mastersCertificate,
    credentialLink: null,
  },

  {
    title: "UCAM Certification",
    issuer: "Universidad Católica San Antonio de Murcia",
    year: "Completed",
    image: ucamCertificate,
    credentialLink: null,
  },

  {
    title: "Cloud Graduate",
    issuer: "Amazon Web Services",
    year: "Completed",
    image: awsCloudGraduate,
    credentialLink:
      "https://www.credly.com/badges/74611a27-e9e2-4586-95fe-6d1c8b051c19/public_url",
  },

  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    image: awsCloudPractitioner,
    credentialLink:
      "https://www.credly.com/badges/62fc133e-f29f-4f61-bf04-feb147869f3e/public_url",
  },

  {
    title: "AWS Cloud Computing",
    issuer: "Migracode",
    year: "Completed",
    image: migracodeAws,
    credentialLink: null,
  },

  {
    title: "Software & Web Development",
    issuer: "Migracode",
    year: "2026",
    image: migracodeWebDev,
    credentialLink: null,
  },

  {
    title: "Forward Program",
    issuer: "McKinsey & Company",
    year: "Completed",
    image: mckinseyForward,
    credentialLink:
      "https://www.credly.com/badges/e5e5bdec-2d63-4d49-86aa-668536eacc94/linked_in_profile",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <div className="container-custom">
        <div className="certifications-heading">
          <p className="section-label">CERTIFICATIONS & LEARNING</p>

          <h2>Credentials & Continuous Learning</h2>

          <p className="section-description">
            Academic qualifications, professional programmes, and technical
            certifications supporting my journey across business, cloud
            computing, and software development.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((certification) => (
            <article className="certification-card" key={certification.title}>
              {certification.image && (
                <div className="certification-thumbnail">
                  <img
                    src={certification.image}
                    alt={`${certification.title} certificate preview`}
                  />
                </div>
              )}

              <div className="certification-content">
                <span className="certification-status">
                  {certification.year}
                </span>
                <h3>{certification.title}</h3>
                <p>{certification.issuer}</p>
                {certification.credentialLink && (
                  <a
                    href={certification.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="credential-link"
                  >
                    Verify Certificate
                    <span>↗</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
