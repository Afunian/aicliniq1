function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <p className="footer-brand">AICliniq</p>
          <p className="footer-note">
            AI automation solutions for clinics and service businesses.
          </p>
        </div>
        <div className="footer-links">
          <a href="mailto:support@aicliniq.io">support@aicliniq.io</a>
          <a href="#home">Privacy Policy</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>{"\u00A9"} 2026 AICliniq. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
