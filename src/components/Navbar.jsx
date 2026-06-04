import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Camera, GraduationCap, Home, Mail, Menu, UsersRound, X } from 'lucide-react';
import { images } from '../content/siteContent';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: BookOpen },
  { to: '/admissions', label: 'Admissions', icon: GraduationCap },
  { to: '/curriculum', label: 'Curriculum', icon: BookOpen },
  { to: '/team', label: 'Team', icon: UsersRound },
  { to: '/gallery', label: 'Gallery', icon: Camera },
  { to: '/contact', label: 'Contact', icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <NavLink className="brand-link" to="/" onClick={() => setIsOpen(false)}>
        <img src={images.logo} alt="Peek a boo Pre-school" />
      </NavLink>

      <button
        className="nav-toggle"
        type="button"
        onClick={() => setIsOpen((currentState) => !currentState)}
        aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={isOpen}
      >
        {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      <nav className={isOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            >
              <Icon size={17} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;