import fs from 'fs';
import path from 'path';

const root = process.cwd();
const imagesDir = path.join(root, 'public', 'images');
const galleryDir = path.join(imagesDir, 'gallery');
const contentPath = path.join(root, 'src', 'content', 'photoAlbums.js');

const albumInfo = {
  'classroom-learning': {
    title: 'Classroom Learning',
    description: 'Letters, sounds, reading, writing, and focused table work.',
    accent: 'blue',
  },
  'creative-practical-life': {
    title: 'Creative & Practical Life',
    description: 'Art, sensory play, food preparation, and hands-on Montessori-style discovery.',
    accent: 'green',
  },
  'outdoor-play-sports': {
    title: 'Outdoor Play & Sports',
    description: 'Swimming, football, skating, garden games, and active play.',
    accent: 'orange',
  },
  'music-dance-performance': {
    title: 'Music, Dance & Performance',
    description: 'Ballet, keyboard exploration, costumes, rhythm, and stage confidence.',
    accent: 'purple',
  },
  'events-trips-community': {
    title: 'Trips, Events & Community',
    description: 'School celebrations, themed days, trips, and community helper experiences.',
    accent: 'red',
  },
};

const photos = [
  ['PXL_20240219_080346088.PORTRAIT.webp', 'classroom-learning', 'classroom-writing-focus-01.webp', 'Learner concentrating during writing practice'],
  ['PXL_20240219_080409241.PORTRAIT.webp', 'classroom-learning', 'classroom-writing-practice-02.webp', 'Learner tracing letters in a workbook'],
  ['PXL_20240220_080633793.webp', 'classroom-learning', 'classroom-table-learning-03.webp', 'Children learning together at classroom tables'],
  ['PXL_20240220_081622389.webp', 'classroom-learning', 'phonics-card-game-04.webp', 'Children practicing phonics with letter cards'],
  ['PXL_20240220_081713110.PORTRAIT.webp', 'classroom-learning', 'phonics-sounds-partners-05.webp', 'Two children matching phonics cards'],
  ['PXL_20240222_113926873.PORTRAIT.webp', 'classroom-learning', 'handwriting-table-work-06.webp', 'Learner doing careful table work'],
  ['PXL_20260302_121827090.PORTRAIT.ORIGINAL.webp', 'classroom-learning', 'reading-corner-friends-07.webp', 'Children sharing books together'],

  ['PXL_20231006_112839426.MP.webp', 'creative-practical-life', 'color-sorting-paint-play-01.webp', 'Children sorting colors during paint play'],
  ['PXL_20231102_112119011.PORTRAIT.webp', 'creative-practical-life', 'snack-time-practical-life-02.webp', 'Learner practicing self-help during snack time'],
  ['PXL_20231102_112206679.PORTRAIT.webp', 'creative-practical-life', 'spooning-practical-life-03.webp', 'Learner spooning carefully in a practical life activity'],
  ['PXL_20231102_112411787.MP.webp', 'creative-practical-life', 'classroom-snack-table-04.webp', 'Children gathered around a colorful snack table'],
  ['PXL_20231102_114107853.PORTRAIT.webp', 'creative-practical-life', 'practical-life-serving-05.webp', 'Learner serving food during a practical life lesson'],
  ['PXL_20231102_114247850.PORTRAIT.webp', 'creative-practical-life', 'yoghurt-spooning-work-06.webp', 'Learner spooning yoghurt during snack work'],
  ['PXL_20231102_115357300.PORTRAIT.webp', 'creative-practical-life', 'snack-preparation-table-07.webp', 'Child preparing a snack at the table'],
  ['PXL_20240212_114119224.webp', 'creative-practical-life', 'toddler-toy-exploration-08.webp', 'Toddler exploring a toy instrument'],
  ['PXL_20240212_114141439.PORTRAIT.webp', 'creative-practical-life', 'sensory-craft-building-09.webp', 'Toddler building during sensory play'],
  ['PXL_20240219_075648747.PORTRAIT.webp', 'creative-practical-life', 'snack-time-smile-10.webp', 'Smiling learner enjoying snack time'],
  ['PXL_20240222_055856814.webp', 'creative-practical-life', 'table-craft-sorting-11.webp', 'Children sorting colorful pieces at a classroom table'],
  ['PXL_20250624_104847799.PORTRAIT.webp', 'creative-practical-life', 'water-play-bowl-12.webp', 'Children exploring water play with a bowl'],
  ['PXL_20250625_062418675.PORTRAIT.webp', 'creative-practical-life', 'toddler-play-group-13.webp', 'Toddlers playing together indoors'],
  ['PXL_20250918_075344106.webp', 'creative-practical-life', 'outdoor-creative-table-14.webp', 'Children making crafts at an outdoor table'],
  ['PXL_20251104_113022351.PORTRAIT.webp', 'creative-practical-life', 'mixing-bowl-work-15.webp', 'Learner mixing ingredients in a bowl'],
  ['PXL_20251104_113522084.PORTRAIT.webp', 'creative-practical-life', 'snack-sharing-friends-16.webp', 'Children sharing snacks together'],
  ['PXL_20251106_100429229.MP.webp', 'creative-practical-life', 'rest-and-care-moment-17.webp', 'Young child resting during care time'],
  ['PXL_20260327_112909877.PORTRAIT.webp', 'creative-practical-life', 'pretend-doctor-play-18.webp', 'Children exploring pretend doctor play'],
  ['PXL_20260327_113433607.webp', 'creative-practical-life', 'cookie-decorating-19.webp', 'Children decorating cookies together'],

  ['PXL_20231102_054829784.MP.webp', 'outdoor-play-sports', 'playground-gathering-01.webp', 'Children gathered at a colorful playground'],
  ['PXL_20240212_111746414.webp', 'outdoor-play-sports', 'skating-balance-play-02.webp', 'Child learning balance on skates'],
  ['PXL_20240212_112049775.PORTRAIT.webp', 'outdoor-play-sports', 'skating-with-guide-03.webp', 'Child skating with adult guidance'],
  ['PXL_20240212_113121660.webp', 'outdoor-play-sports', 'skating-group-line-04.webp', 'Children lined up for outdoor skating play'],
  ['PXL_20240213_114841452.webp', 'outdoor-play-sports', 'courtyard-ball-game-05.webp', 'Child playing ball in the school courtyard'],
  ['PXL_20240229_075641553.PORTRAIT.webp', 'outdoor-play-sports', 'martial-arts-practice-06.webp', 'Child practicing martial arts outdoors'],
  ['PXL_20240229_080207873.webp', 'outdoor-play-sports', 'martial-arts-line-up-07.webp', 'Children lined up for martial arts practice'],
  ['PXL_20250623_121130584.webp', 'outdoor-play-sports', 'swimming-lesson-pool-08.webp', 'Children taking a swimming lesson'],
  ['PXL_20250623_121215437.MP.webp', 'outdoor-play-sports', 'pool-float-play-09.webp', 'Child playing in a yellow pool float'],
  ['PXL_20250623_121814235.PORTRAIT.ORIGINAL.webp', 'outdoor-play-sports', 'swimming-group-pool-10.webp', 'Children sitting together in the swimming pool'],
  ['PXL_20250623_124215044.PORTRAIT.webp', 'outdoor-play-sports', 'pool-float-friends-11.webp', 'Children playing with floats in the pool'],
  ['PXL_20251029_075613082.MP.webp', 'outdoor-play-sports', 'soccer-practice-12.webp', 'Children practicing football on the lawn'],
  ['PXL_20251029_075654099.MP.webp', 'outdoor-play-sports', 'football-team-play-13.webp', 'Children playing football together'],
  ['PXL_20251030_095910574.PORTRAIT.webp', 'outdoor-play-sports', 'swimming-noodle-play-14.webp', 'Children swimming with pool noodles'],
  ['PXL_20260225_072754823.PORTRAIT.webp', 'outdoor-play-sports', 'garden-run-15.webp', 'Child running in the school garden'],
  ['PXL_20260225_074911152.PORTRAIT.webp', 'outdoor-play-sports', 'football-kick-practice-16.webp', 'Child kicking a football on the courtyard'],
  ['PXL_20260225_075606958.webp', 'outdoor-play-sports', 'lawn-football-game-17.webp', 'Children playing football on the lawn'],
  ['PXL_20260225_080220709.PORTRAIT.webp', 'outdoor-play-sports', 'ball-heading-game-18.webp', 'Children watching a football in the air'],
  ['PXL_20260225_080230523.PORTRAIT.webp', 'outdoor-play-sports', 'garden-ball-play-19.webp', 'Children playing ball in the garden'],
  ['PXL_20260226_093009388.PORTRAIT.webp', 'outdoor-play-sports', 'swimming-goggles-play-20.webp', 'Child standing in the pool with swimming goggles'],

  ['PXL_20240221_113319279.PORTRAIT.webp', 'music-dance-performance', 'ballet-line-01.webp', 'Children standing together in ballet outfits'],
  ['PXL_20240221_113517305.webp', 'music-dance-performance', 'ballet-practice-02.webp', 'Children practicing ballet in tutus'],
  ['PXL_20240221_114937238.webp', 'music-dance-performance', 'ballet-stretch-03.webp', 'Children stretching during ballet practice'],
  ['PXL_20240221_115913403.webp', 'music-dance-performance', 'ballet-floor-pose-04.webp', 'Children posing on the ballet floor'],
  ['PXL_20251010_062259471.PORTRAIT.webp', 'music-dance-performance', 'cultural-costume-smiles-05.webp', 'Children smiling in cultural costumes'],
  ['PXL_20251010_064818276.PORTRAIT.webp', 'music-dance-performance', 'cultural-story-costume-06.webp', 'Child dressed for cultural role play'],
  ['PXL_20251010_064842750.PORTRAIT.webp', 'music-dance-performance', 'cultural-costume-friends-07.webp', 'Friends posing in cultural costumes'],
  ['PXL_20251010_084502229.PORTRAIT.ORIGINAL.webp', 'music-dance-performance', 'festive-stage-group-08.webp', 'Children posing together on a festive stage'],
  ['PXL_20251010_084547247.PORTRAIT.webp', 'music-dance-performance', 'cultural-pair-portrait-09.webp', 'Two children in cultural performance outfits'],
  ['PXL_20251010_090632040.PORTRAIT.ORIGINAL.webp', 'music-dance-performance', 'formal-performance-boys-10.webp', 'Boys dressed for a formal performance'],
  ['PXL_20251010_091652966.webp', 'music-dance-performance', 'celebration-duo-11.webp', 'Two children smiling on a celebration backdrop'],
  ['PXL_20260223_114147612.PORTRAIT.webp', 'music-dance-performance', 'keyboard-lesson-teacher-12.webp', 'Teacher guiding children at a keyboard'],
  ['PXL_20260223_115336491.PORTRAIT.webp', 'music-dance-performance', 'keyboard-exploration-13.webp', 'Child exploring notes on a keyboard'],
  ['PXL_20260226_115651962.PORTRAIT.webp', 'music-dance-performance', 'keyboard-classroom-play-14.webp', 'Children playing keyboard in class'],

  ['PXL_20240301_074846072.PORTRAIT.webp', 'events-trips-community', 'aquarium-trip-group-01.webp', 'Children and teachers on an aquarium trip'],
  ['PXL_20240301_075226819.PORTRAIT.webp', 'events-trips-community', 'aquarium-wall-friends-02.webp', 'Two children posing by an aquarium wall'],
  ['PXL_20250917_065802373.PORTRAIT.webp', 'events-trips-community', 'back-to-school-portrait-03.webp', 'Learner smiling on back-to-school day'],
  ['PXL_20250917_071258276.MP.webp', 'events-trips-community', 'we-are-back-boys-04.webp', 'Children posing at a We Are Back display'],
  ['PXL_20250917_072730436.PORTRAIT.webp', 'events-trips-community', 'we-are-back-friends-05.webp', 'Friends posing at a We Are Back school display'],
  ['PXL_20260210_053158543.PORTRAIT.webp', 'events-trips-community', 'first-day-preschool-06.webp', 'Children posing on first day of preschool'],
  ['PXL_20260220_093634042.MP.webp', 'events-trips-community', 'rainbow-mask-celebration-07.webp', 'Class celebration under a rainbow balloon arch'],
  ['PXL_20260306_091912468.MP.webp', 'events-trips-community', 'womens-day-class-photo-08.webp', 'Class photo for International Womens Day'],
  ['PXL_20260306_091933084.MP.webp', 'events-trips-community', 'womens-day-group-photo-09.webp', 'Children gathered for International Womens Day'],
  ['PXL_20260306_095032942.webp', 'events-trips-community', 'womens-day-stage-10.webp', 'Children seated at an International Womens Day stage'],
  ['PXL_20260327_082842441.webp', 'events-trips-community', 'community-helpers-police-11.webp', 'Children dressed as community helpers beside a police truck'],
  ['PXL_20260327_112314586.PORTRAIT.webp', 'events-trips-community', 'police-role-play-12.webp', 'Child dressed as a police officer for role play'],
  ['PXL_20260327_112436019.webp', 'events-trips-community', 'transport-day-stage-13.webp', 'Transport themed school stage display'],
  ['PXL_20260327_112740970.webp', 'events-trips-community', 'doctor-day-group-14.webp', 'Children dressed as doctors during a themed day'],
  ['PXL_20260410_085144100.PORTRAIT.webp', 'events-trips-community', 'celebration-medals-15.webp', 'Children smiling with medals after a school celebration'],
  ['PXL_20260410_085245056.PORTRAIT.ORIGINAL.webp', 'events-trips-community', 'celebration-medals-16.webp', 'Children holding medals under a balloon arch'],
];

fs.mkdirSync(galleryDir, { recursive: true });

const albums = Object.entries(albumInfo).map(([slug, info]) => ({
  id: slug,
  ...info,
  photos: [],
}));

const albumsById = Object.fromEntries(albums.map((album) => [album.id, album]));

for (const [oldName, albumId, newName, alt] of photos) {
  const albumDir = path.join(galleryDir, albumId);
  fs.mkdirSync(albumDir, { recursive: true });

  const currentPath = path.join(imagesDir, oldName);
  const nextPath = path.join(albumDir, newName);

  if (fs.existsSync(currentPath)) {
    fs.renameSync(currentPath, nextPath);
  } else if (!fs.existsSync(nextPath)) {
    throw new Error(`Missing source image: ${oldName}`);
  }

  albumsById[albumId].photos.push({
    src: `/images/gallery/${albumId}/${newName}`,
    alt,
  });
}

const fileContent = `export const photoAlbums = ${JSON.stringify(albums, null, 2)};\n\nexport const galleryPhotos = photoAlbums.flatMap((album) => album.photos.map((photo) => photo.src));\n\nexport const getAlbum = (albumId) => photoAlbums.find((album) => album.id === albumId);\n\nexport const getAlbumPhotos = (albumId, limit) => {\n  const album = getAlbum(albumId);\n  const photos = album ? album.photos : [];\n  return typeof limit === 'number' ? photos.slice(0, limit) : photos;\n};\n\nexport const getFeaturedPhotos = (albumIds, limit = 4) => albumIds\n  .flatMap((albumId) => getAlbumPhotos(albumId))\n  .slice(0, limit);\n`;

fs.writeFileSync(contentPath, fileContent);
console.log(`Organized ${photos.length} images into ${albums.length} gallery albums.`);