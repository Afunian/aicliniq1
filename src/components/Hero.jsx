function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">AI-powered systems for modern businesses</p>
          <h1>AI Automation for Clinics and Service Businesses</h1>
          <p className="lead">
            AICliniq helps clinics and service-based businesses capture leads,
            automate conversations, improve follow-up, and streamline customer
            communication across web, social, and messaging channels.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Book a Demo
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="visual-card">
            <span className="status-dot" />
            <p className="visual-title">AICliniq Assistant</p>
            <p className="visual-line">New inquiry captured from website chat</p>
            <p className="visual-line">Follow-up sent through messaging workflow</p>
            <p className="visual-line">Appointment request routed for review</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
