import { getAlbum, getAlbumPhotos } from '../content/photoAlbums';

const MiniGallery = ({
  albumId = 'classroom-learning',
  title,
  text,
  count = 4,
  offset = 0,
}) => {
  const album = getAlbum(albumId);
  const albumPhotos = getAlbumPhotos(albumId);
  const photos = [...albumPhotos, ...albumPhotos].slice(offset, offset + count);

  if (!album || photos.length === 0) {
    return null;
  }

  return (
    <section className="school-moments">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">School life</div>
          <h2>{title || album.title}</h2>
        </div>
        <p>{text || album.description}</p>
      </div>
      <div className="school-photo-grid">
        {photos.map((photo) => (
          <figure className={`school-photo-card ${album.accent}`} key={photo.src}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default MiniGallery;