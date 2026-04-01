import { APP_NAME } from "../config";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <header className="site-header">
      <div className="container navbar">
        <a href="#home" className="logo" aria-label={`${APP_NAME} home`}>
          {APP_NAME}
        </a>

        <nav aria-label="Primary navigation">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="btn btn-primary">
          Book a Demo
        </a>
      </div>
    </header>
  );
}

export default Navbar;
