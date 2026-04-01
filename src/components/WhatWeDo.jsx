const items = [
  {
    title: "Lead Capture",
    description:
      "Capture and organize incoming leads from your website, forms, and digital channels so fewer opportunities are missed.",
  },
  {
    title: "AI Communication",
    description:
      "Use AI-powered messaging to respond faster, answer common questions, and keep prospects engaged.",
  },
  {
    title: "Workflow Automation",
    description:
      "Reduce repetitive manual work by connecting inquiries, follow-up steps, and internal actions into one smoother process.",
  },
];

function WhatWeDo() {
  return (
    <section id="services" className="section section-soft" aria-labelledby="what-we-do-title">
      <div className="container">
        <h2 id="what-we-do-title">What We Do</h2>
        <div className="card-grid">
          {items.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
