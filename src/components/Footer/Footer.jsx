import { MessageCircle, Sparkles, LayoutGrid, Briefcase, CalendarDays, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__left">
          <button className="site-footer__pill" aria-label="Accessibility">
            <Sparkles size={13} />
          </button>
          <button className="site-footer__pill" aria-label="Quick actions">
            <LayoutGrid size={13} />
          </button>
          <a href="#" className="site-footer__link">Services</a>
        </div>

        <div className="site-footer__right">
          <a href="#" className="site-footer__link">
            <Briefcase size={13} /> Careers
          </a>
          <a href="#" className="site-footer__link">
            <CalendarDays size={13} /> Events
          </a>
          <a href="#" className="site-footer__link">
            <Mail size={13} /> Contact Us
          </a>
          <a href="#" className="site-footer__link">
            <Globe size={13} /> dubai.ae
          </a>
          <button className="site-footer__pill" aria-label="AI assistant">AI</button>
          <button className="site-footer__pill" aria-label="Chat">
            <MessageCircle size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
