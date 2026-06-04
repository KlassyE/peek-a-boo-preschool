import MiniGallery from '../components/MiniGallery';
import { Link } from 'react-router-dom';
import { ArrowRight, ClipboardCheck, HeartHandshake, MessageCircle, School } from 'lucide-react';
import { FeeStructureTable, QuickFeePills, StudentGroupCards } from '../components/StudentPrograms';
import { images, parentReasons } from '../content/siteContent';
import { getAlbumPhotos } from '../content/photoAlbums';

const Admissions = () => {
  const admissionPhoto = getAlbumPhotos('toddlers')[1] || getAlbumPhotos('events-trips-community')[0];
  const steps = [
    { title: 'Say hello', text: 'Share your child\'s age, interests, and preschool needs.', icon: MessageCircle },
    { title: 'Visit Peek a boo', text: 'Tour the learning spaces and meet the care team.', icon: School },
    { title: 'Plan together', text: 'Discuss routines, support needs, and the right start date.', icon: HeartHandshake },
    { title: 'Enroll', text: 'Complete the forms and prepare for the first joyful day.', icon: ClipboardCheck },
  ];

  return (
    <div className="page">
      <section className="page-hero compact-hero admissions-hero">
        <div>
          <div className="section-kicker">Admissions</div>
          <h1>Join the Peek a boo family.</h1>
          <p>
            We welcome infants, toddlers, creche/playgroup learners, and preschool
            families into a safe, joyful village serious about whole-child development.
          </p>
          <QuickFeePills />
          <Link className="primary-button" to="/contact">
            <span>Start enrollment</span>
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
        <div className="admissions-media-stack" aria-label="Admissions and parent promise images">
          <figure className="admissions-photo-card">
            <img src={admissionPhoto.src} alt={admissionPhoto.alt} />
          </figure>
          <figure className="admissions-poster-card">
            <img src={images.whyParentsOne} alt="Why Parents Choose Us poster" />
          </figure>
        </div>
      </section>

      <StudentGroupCards
        title="Choose the right start for your child."
        text="Admissions are organized by age so care, feeding, rest, play, and learning expectations are clear from the beginning."
      />

      <FeeStructureTable />

      <section className="steps-section">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article key={step.title}>
              <Icon size={25} aria-hidden="true" />
              <h2>{step.title}</h2>
              <p>{step.text}</p>
            </article>
          );
        })}
      </section>

      <section className="split-section">
        <div className="poster-frame">
          <img src={images.whyParentsTwo} alt="Family support poster" />
        </div>
        <div className="split-copy">
          <div className="section-kicker">Why parents choose us</div>
          <h2>Support for children and the grown-ups raising them.</h2>
          <ul className="check-list">
            {parentReasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>

      <MiniGallery
        albumId="toddlers"
        title="Young children settle through play and friendship."
        text="Families get a real sense of our warm routines, active spaces, sensory work, and happy everyday moments."
        count={4}
      />
    </div>
  );
};

export default Admissions;