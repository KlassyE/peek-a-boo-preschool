import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';
import { images } from '../content/siteContent';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src={images.logo} alt="Peek a boo Pre-school logo" />
        <p>Partners in parenting, nurturing every child's heart, mind, and spirit.</p>
      </div>

      <div className="footer-links" aria-label="Footer links">
        <Link to="/about">About</Link>
        <Link to="/curriculum">Curriculum</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <address className="footer-contact">
        <span><MapPin size={17} aria-hidden="true" /> Kampala, Uganda</span>
        <span><Mail size={17} aria-hidden="true" /> hello@peek-a-boo-preschool.com</span>
        <span><Phone size={17} aria-hidden="true" /> Admissions open</span>
      </address>
    </footer>
  );
}

export default Footer;