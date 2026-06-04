import MiniGallery from '../components/MiniGallery';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, HeartHandshake, Stars } from 'lucide-react';
import WordGarden from '../components/WordGarden';
import { StudentGroupCards } from '../components/StudentPrograms';
import { images, learningRhythm, parentReasons } from '../content/siteContent';
import { getAlbumPhotos, photoAlbums } from '../content/photoAlbums';

const Home = () => {
  const heroPhotos = [
    getAlbumPhotos('infants')[5],
    getAlbumPhotos('toddlers')[0],
    getAlbumPhotos('classroom-learning')[2],
  ].filter(Boolean);

  return (
    <div className="page home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <div className="section-kicker">Peek a boo Pre-school</div>
          <h1>Partners in parenting for bright, brave little learners.</h1>
          <p>
            A joyful preschool in Uganda for infants, toddlers, creche/playgroup,
            and preschool learners growing through care, play, kindness, and routine.
          </p>
          <div className="hero-actions">
            <Link className="primary-button" to="/admissions">
              <span>Admissions</span>
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="secondary-button" to="/gallery">
              <Camera size={18} aria-hidden="true" />
              <span>Gallery</span>
            </Link>
          </div>
        </div>

        <div className="poster-frame hero-poster-frame">
          <img className="full-poster-image" src={images.welcome} alt="Welcome Note poster" />
        </div>
      </section>

      <section className="intro-band">
        <div>
          <div className="section-kicker">Welcome</div>
          <h2>Nurturing every child's heart, mind, and spirit.</h2>
        </div>
        <p>
          We walk with parents from baby care through toddlers and creche, helping
          children become confident, kind, curious, and ready for the next school step.
        </p>
      </section>

      <StudentGroupCards
        title="Infants, toddlers, and creche are part of the Peek a boo day."
        text="Each group has its own age range, care rhythm, meals, rest time, and learning focus, so families can quickly see where their child belongs."
      />

      <section className="feature-grid" aria-label="Why families choose Peek a boo">
        {parentReasons.slice(0, 4).map((reason, index) => (
          <article className="feature-card" key={reason}>
            <span>{index + 1}</span>
            <p>{reason}</p>
          </article>
        ))}
      </section>

      <MiniGallery
        albumId="classroom-learning"
        title="Real classrooms, real discovery."
        text="Children build confidence through writing, phonics, reading, practical work, and calm guidance."
        count={4}
      />

      <section className="split-section">
        <div className="hero-photo-collage" aria-label="Peek a boo preschool photo moments">
          {heroPhotos.map((photo) => (
            <img src={photo.src} alt={photo.alt} key={photo.src} loading="lazy" />
          ))}
        </div>
        <div className="split-copy">
          <div className="section-kicker">Learning rhythm</div>
          <h2>Days full of movement, meaning, and tiny victories.</h2>
          <div className="rhythm-list">
            {learningRhythm.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WordGarden />

      <section className="gallery-teaser">
        <div className="section-heading-row">
          <div>
            <div className="section-kicker">Photo albums</div>
            <h2>Seven organized albums from school life.</h2>
          </div>
          <Link className="text-link" to="/gallery">
            View gallery <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <div className="mini-gallery">
          {photoAlbums.map((album) => (
            <Link className={`mini-gallery-item ${album.accent}`} to="/gallery" key={album.id}>
              <img src={album.photos[0].src} alt={album.photos[0].alt} />
              <span>{album.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <HeartHandshake size={34} aria-hidden="true" />
        <div>
          <h2>Ready to peek inside?</h2>
          <p>Admissions are open for families looking for a warm preschool village.</p>
        </div>
        <Link className="primary-button" to="/contact">
          <span>Talk to us</span>
          <Stars size={18} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
};

export default Home;