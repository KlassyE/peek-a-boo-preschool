import { useState } from 'react';
import { ArrowLeft, Images } from 'lucide-react';
import { photoAlbums } from '../content/photoAlbums';
import { galleryItems } from '../content/siteContent';

const Gallery = () => {
  const [activeAlbumId, setActiveAlbumId] = useState(null);
  const posterAlbum = {
    id: 'school-posters',
    title: 'School Posters',
    description: 'Welcome, story, mission, purpose, values, and parent promise posters.',
    accent: 'blue',
    layout: 'poster',
    photos: galleryItems.map((item) => ({
      src: item.src,
      alt: `${item.title} poster`,
    })),
  };
  const galleryAlbums = [posterAlbum, ...photoAlbums];
  const activeAlbum = galleryAlbums.find((album) => album.id === activeAlbumId);

  return (
    <div className="page">
      <section className="page-hero text-only-hero">
        <div className="section-kicker">Gallery</div>
        <h1>School moments, neatly grouped.</h1>
        <p>
          Choose an album to see infants, toddlers and creche play, classroom
          learning, creative work, outdoor play, performances, trips, and celebration days.
        </p>
      </section>

      {!activeAlbum && (
        <section className="album-grid" aria-label="School photo albums and posters">
          {galleryAlbums.map((album) => (
            <button
              className={`album-card ${album.accent}`}
              type="button"
              key={album.id}
              onClick={() => setActiveAlbumId(album.id)}
            >
              <span className={`album-cover-stack ${album.layout === 'poster' ? 'poster-cover-stack' : ''}`} aria-hidden="true">
                {album.photos.slice(0, 3).map((photo) => (
                  <img src={photo.src} alt="" key={photo.src} loading="lazy" />
                ))}
              </span>
              <span className="album-card-copy">
                <span className="album-card-title">
                  <Images size={22} aria-hidden="true" />
                  {album.title}
                </span>
                <span>{album.description}</span>
                <strong>{album.photos.length} images</strong>
              </span>
            </button>
          ))}
        </section>
      )}

      {activeAlbum && (
        <section className="gallery-album-view" aria-label={`${activeAlbum.title} photos`}>
          <div className="section-heading-row">
            <div>
              <div className="section-kicker">{activeAlbum.title}</div>
              <h2>{activeAlbum.description}</h2>
            </div>
            <button className="secondary-button" type="button" onClick={() => setActiveAlbumId(null)}>
              <ArrowLeft size={18} aria-hidden="true" />
              <span>Albums</span>
            </button>
          </div>

          <div className={`gallery-grid ${activeAlbum.layout === 'poster' ? 'poster-gallery-grid' : ''}`}>
            {activeAlbum.photos.map((photo) => (
              <article className={`gallery-card ${activeAlbum.accent} ${activeAlbum.layout === 'poster' ? 'poster-gallery-card' : ''}`} key={photo.src}>
                <a href={photo.src} target="_blank" rel="noreferrer" aria-label={`Open ${photo.alt}`}>
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                </a>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Gallery;