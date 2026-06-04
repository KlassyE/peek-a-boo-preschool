import MiniGallery from '../components/MiniGallery';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="page">
      <section className="page-hero text-only-hero">
        <div className="section-kicker">Contact</div>
        <h1>Come say hello.</h1>
        <p>
          Ask about admissions, arrange a visit, or share what your little learner needs
          to feel at home.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-panel">
          <h2>Peek a boo Pre-school</h2>
          <address>
            <span><MapPin size={19} aria-hidden="true" /> Kampala, Uganda</span>
            <a href="mailto:hello@peekaboopreschool.ug">
              <Mail size={19} aria-hidden="true" /> hello@peekaboopreschool.ug
            </a>
            <span><Phone size={19} aria-hidden="true" /> Admissions open</span>
          </address>
        </div>

        <form className="contact-form" action="mailto:hello@peekaboopreschool.ug" method="post" encType="text/plain">
          <label>
            Parent or guardian name
            <input name="name" type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="you@example.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" placeholder="Tell us about your child" />
          </label>
          <button className="primary-button" type="submit">
            <span>Send note</span>
            <MessageCircle size={18} aria-hidden="true" />
          </button>
        </form>
      </section>

      <MiniGallery
        albumId="events-trips-community"
        title="Visit and see the school village for yourself."
        text="From classroom moments to celebration days, there is always something warm and active happening here."
        count={4}
      />
    </div>
  );
};

export default Contact;