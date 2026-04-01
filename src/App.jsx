import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import BuiltFor from "./components/BuiltFor";
import WhyAICliniq from "./components/WhyAICliniq";
import QuoteStrip from "./components/QuoteStrip";
import ContactCTA from "./components/ContactCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatWeDo />
        <BuiltFor />
        <WhyAICliniq />
        <QuoteStrip />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
