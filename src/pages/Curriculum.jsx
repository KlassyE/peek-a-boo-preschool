import MiniGallery from '../components/MiniGallery';
import { BookOpenCheck, Brush, BrainCircuit, Users, Compass, ClipboardCheck } from 'lucide-react';
import WordGarden from '../components/WordGarden';
import { CurriculumBlendNote, StudentGroupCards, TimetableMenuSection } from '../components/StudentPrograms';

const Curriculum = () => {
  const curriculumAreas = [
    { title: 'Uganda National Curriculum', text: 'Integrating our rich local context and early childhood development framework focused on holistic growth and social values.', icon: Users },
    { title: 'Sipro Curriculum Support', text: 'Using structured Ugandan learner workbooks, teacher guides, assessment materials, and phonics support as a practical readiness layer.', icon: ClipboardCheck },
    { title: 'Jolly Phonics', text: 'A fun, multi-sensory synthetic phonics method that gets children reading and writing from an early age through actions and sounds.', icon: BookOpenCheck },
    { title: 'Montessori Method', text: 'Encouraging independent, self-directed learning where children naturally explore and discover practically and sensorially.', icon: Compass },
    { title: 'Creative Expression', text: 'Nurturing imagination through arts, crafts, role-play, music, and vibrant colors.', icon: Brush },
    { title: 'Problem Solving & STEM', text: 'Building logical thinking and curiosity with blocks, puzzles, pattern recognition, and counting play.', icon: BrainCircuit },
  ];

  return (
    <div className="page">
      <section className="page-hero text-only-hero">
        <div className="section-kicker">Curriculum</div>
        <h1>An integrated approach for growing minds.</h1>
        <p>
          We carefully blend the Uganda National Curriculum, Sipro curriculum support, Jolly Phonics, and Montessori principles for infants, toddlers, creche/playgroup, and preschool learners.
        </p>
      </section>

      <section className="curriculum-grid">
        {curriculumAreas.map((area) => {
          const Icon = area.icon;

          return (
            <article key={area.title}>
              <Icon size={26} aria-hidden="true" />
              <h2>{area.title}</h2>
              <p>{area.text}</p>
            </article>
          );
        })}
      </section>

      <CurriculumBlendNote />

      <StudentGroupCards
        title="Age-appropriate learning from baby care to creche readiness."
        text="Infants need care rhythms, toddlers need movement and sensory discovery, and creche learners begin structured practical life, pre-reading, and pre-math work."
      />

      <TimetableMenuSection />

      <MiniGallery
        albumId="toddlers"
        title="Curriculum children can see, touch, and try."
        text="Sipro-supported readiness, Jolly Phonics, Montessori-style practical work, and sensory exploration come alive through hands-on moments."
        count={4}
      />

      <WordGarden />
    </div>
  );
};

export default Curriculum;