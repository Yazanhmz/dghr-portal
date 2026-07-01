import { Search, Contrast, Languages, LogIn, Scale, Building2, HeartPulse } from "lucide-react";

const navLinks = [
  { label: "Home", active: true },
  { label: "About DGHR" },
  { label: "Laws & Circulars" },
  { label: "Open Data" },
  { label: "Learning and Development" },
  { label: "Awards" },
  { label: "Media Centre" },
];

const serviceCards = [
  {
    icon: Scale,
    title: "Laws & Regulations",
    description: "Access the legislative framework that governs Dubai's government workforce.",
  },
  {
    icon: Building2,
    title: "Development Centers",
    description: "Explore programs designed to build capability across government entities.",
  },
  {
    icon: HeartPulse,
    title: "Health Insurance",
    description: "Review coverage and benefits available to Dubai Government employees.",
  },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__frame">
        <div className="hero__globe-wrap" aria-hidden="true">
          <div className="hero__stars" />
          <div className="hero__globe" />
        </div>

        <div className="hero__content">
          <nav className="hero__nav" aria-label="Primary">
            <div className="hero__brand">
              <div className="hero__crest" aria-hidden="true">DGHR</div>
            </div>

            <ul className="hero__links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className={link.active ? "hero__link hero__link--active" : "hero__link"}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="hero__actions">
              <button className="hero__icon-btn" aria-label="Search">
                <Search size={16} />
              </button>
              <button className="hero__icon-btn" aria-label="Accessibility settings">
                <Contrast size={16} />
              </button>
              <button className="hero__lang-btn" aria-label="Switch to Arabic">
                <Languages size={14} />
                <span>عربي</span>
              </button>
              <a href="#" className="hero__login">
                <LogIn size={14} />
                <span>Login</span>
              </a>
            </div>
          </nav>

          <div className="hero__copy">
            <h1 className="hero__title">
              Empowering Government
              <br />
              Talent for the Future
            </h1>
            <p className="hero__subtitle">Enabling and supporting Dubai Government workforce</p>
            <a href="#about" className="hero__cta">
              About DGHR
            </a>
          </div>
        </div>

        <div className="hero__cards">
          {serviceCards.map(({ icon: Icon, title, description }) => (
            <a href="#" className="service-card" key={title}>
              <div className="service-card__icon">
                <Icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="service-card__title">{title}</h3>
              <p className="service-card__desc">{description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
