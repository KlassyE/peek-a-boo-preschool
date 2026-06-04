import { Heart, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';
import { StudentGroupCards } from '../components/StudentPrograms';
import { images, values } from '../content/siteContent';

const About = () => {
  return (
    <div className="page">
      <section className="page-hero compact-hero poster-hero">
        <div>
          <div className="section-kicker">About Peek a boo</div>
          <h1>A second home for curious children.</h1>
          <p>
            Born from love, Peek a boo supports infants, toddlers, creche/playgroup,
            and preschool learners with care, wisdom, and joy.
          </p>
        </div>
        <img className="full-poster-image" src={images.story} alt="Our Story poster" />
      </section>

      <StudentGroupCards
        title="Three early years groups, one caring school family."
        text="Families can begin with infant care, continue into toddler routines, and move into creche/playgroup readiness before the next school step."
      />

      <section className="split-section reverse">
        <div className="split-copy">
          <div className="section-kicker">Mission and values</div>
          <h2>Dynamic, nurturing programs for early development.</h2>
          <p>
            We help children reach their full potential by supporting early learning
            across all areas of development while protecting the values that make
            the school feel warm, steady, and trusted.
          </p>
          <div className="icon-list">
            <span><Heart size={18} aria-hidden="true" /> Love and care</span>
            <span><ShieldCheck size={18} aria-hidden="true" /> Trust and safety</span>
            <span><Lightbulb size={18} aria-hidden="true" /> Creative discovery</span>
          </div>
        </div>
        <div className="poster-stack about-poster-stack">
          <img src={images.mission} alt="Our Mission poster" />
          <img src={images.values} alt="Our Values poster" />
        </div>
      </section>

      <section className="values-section">
        <div>
          <div className="section-kicker">Our values</div>
          <h2>Small habits, big character.</h2>
        </div>
        <div className="values-grid">
          {values.map((value) => (
            <article key={value}>
              <Sparkles size={20} aria-hidden="true" />
              <span>{value}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;