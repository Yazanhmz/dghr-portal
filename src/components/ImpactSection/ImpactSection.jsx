import { ChevronRight } from "lucide-react";

const linkColumns = [
  {
    title: "Events",
    links: ["News", "HR Talks", "Media Toolkit"],
  },
  {
    title: "Organisation Structure",
    links: ["Initiatives", "Achievements", "Director General"],
  },
];

export default function ImpactSection() {
  return (
    <section className="impact">
      <div className="impact__intro">
        <h2 className="impact__heading">DGHR Impact</h2>
        <ul className="impact__list">
          <li>
            <a href="#" className="impact__list-link">
              Achievements <ChevronRight size={14} />
            </a>
          </li>
          <li>
            <a href="#" className="impact__list-link">
              Initiatives <ChevronRight size={14} />
            </a>
          </li>
        </ul>
      </div>

      <div className="impact__visual">
        <div className="impact__tile">
          <div className="impact__tile-inner">
            <span className="impact__stat">20,000+</span>
            <span className="impact__stat-label">Active Employees</span>
          </div>
        </div>
      </div>

      <div className="impact__links">
        {linkColumns.map((col) => (
          <div className="impact__col" key={col.title}>
            <h3 className="impact__col-title">{col.title}</h3>
            <ul className="impact__col-links">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
