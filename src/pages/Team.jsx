import MiniGallery from '../components/MiniGallery';
import { Heart, Puzzle, ShieldCheck, SmilePlus } from 'lucide-react';
import { getAlbumPhotos } from '../content/photoAlbums';

const Team = () => {
  const teamPhoto = getAlbumPhotos('music-dance-performance')[11] || getAlbumPhotos('classroom-learning')[0];
  const teamStrengths = [
    { title: 'Warm Guides', text: 'Patient adults who know preschoolers need rhythm, warmth, and room to wonder.', icon: Heart },
    { title: 'Play Planners', text: 'Teachers who turn stories, songs, blocks, paint, and movement into learning.', icon: Puzzle },
    { title: 'Safety First', text: 'Careful routines that help children feel secure enough to explore.', icon: ShieldCheck },
    { title: 'Happy Starts', text: 'Gentle transitions for new families and children settling into school life.', icon: SmilePlus },
  ];

  return (
    <div className="page">
      <section className="page-hero compact-hero">
        <div>
          <div className="section-kicker">Our team</div>
          <h1>Caring adults make the magic feel steady.</h1>
          <p>
            Our early childhood team creates a loving environment where children are
            known, encouraged, guided, and celebrated.
          </p>
        </div>
        <img src={teamPhoto.src} alt={teamPhoto.alt} />
      </section>

      <section className="team-grid">
        {teamStrengths.map((strength) => {
          const Icon = strength.icon;

          return (
            <article key={strength.title}>
              <Icon size={28} aria-hidden="true" />
              <h2>{strength.title}</h2>
              <p>{strength.text}</p>
            </article>
          );
        })}
      </section>

      <MiniGallery
        albumId="music-dance-performance"
        title="Guided activities with room to shine."
        text="Our team supports music, movement, performance, confidence, and expressive learning."
        count={4}
      />
    </div>
  );
};

export default Team;