const points = [
  "Modern AI-first approach",
  "Simple automation that saves time",
  "Better response and follow-up",
  "Clear systems that support growth",
];

function WhyAICliniq() {
  return (
    <section className="section section-soft" aria-labelledby="why-aicliniq-title">
      <div className="container">
        <h2 id="why-aicliniq-title">Why AICliniq</h2>
        <p className="section-intro">
          AICliniq is built around practical automation that supports real
          business operations.
        </p>
        <ul className="check-list">
          {points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default WhyAICliniq;
