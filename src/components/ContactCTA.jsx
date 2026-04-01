import { SUPPORT_EMAIL } from "../config";

function ContactCTA() {
  const mailtoLink = `mailto:${SUPPORT_EMAIL}`;

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container contact-box">
        <h2 id="contact-title">Ready to build a smarter system?</h2>
        <p>
          Reach us at <a href={mailtoLink} className="contact-email">{SUPPORT_EMAIL}</a>{" "}
          to learn more about AICliniq and our automation services.
        </p>
        <a href={mailtoLink} className="btn btn-primary">
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ContactCTA;
