const categories = ["Clinics", "Local businesses", "Service providers"];

function BuiltFor() {
  return (
    <section id="about" className="section" aria-labelledby="built-for-title">
      <div className="container">
        <h2 id="built-for-title">Built For</h2>
        <p className="section-intro">
          Designed for organizations that need faster communication, better
          follow-up, and less manual admin work.
        </p>
        <div className="pill-row" role="list" aria-label="Built for categories">
          {categories.map((item) => (
            <span key={item} className="pill" role="listitem">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BuiltFor;
