import { useState } from 'react';
import { Baby, CalendarDays, Clock3, Coins, Soup, Sparkles } from 'lucide-react';
import { programFeeLabels, studentGroups } from '../content/siteContent';

export const StudentGroupCards = ({
  kicker = 'Student groups',
  title = 'Care designed around each age and stage.',
  text = 'Infants, toddlers, and creche learners each follow a rhythm that fits their development, meals, rest, play, and learning needs.',
}) => (
  <section className="student-groups-section">
    <div className="section-heading-row">
      <div>
        <div className="section-kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>

    <div className="student-group-grid">
      {studentGroups.map((group) => (
        <article className={`student-group-card ${group.accent}`} key={group.id}>
          <img src={group.image.src} alt={group.image.alt} loading="lazy" />
          <div className="student-group-copy">
            <span className="age-pill"><Baby size={16} aria-hidden="true" /> {group.ageRange}</span>
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>
              {group.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export const FeeStructureTable = ({
  title = 'Fee structure for every level.',
  text = 'All fees are displayed directly here so families can compare the three age groups at a glance.',
}) => (
  <section className="fee-table-section">
    <div className="section-heading-row">
      <div>
        <div className="section-kicker">Fees</div>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>

    <div className="table-scroll" role="region" aria-label="Fee structure table" tabIndex="0">
      <table className="fee-table">
        <thead>
          <tr>
            <th scope="col">Level</th>
            <th scope="col">Age range</th>
            {programFeeLabels.map((feeLabel) => (
              <th scope="col" key={feeLabel.key}>{feeLabel.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {studentGroups.map((group) => (
            <tr key={group.id}>
              <th scope="row">{group.title}</th>
              <td>{group.ageRange}</td>
              {programFeeLabels.map((feeLabel) => (
                <td key={feeLabel.key}>{group.fees[feeLabel.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export const TimetableMenuSection = ({
  title = 'Timetables and menus by student group.',
  text = 'Choose a group to see its routine and menu without making the page long.',
}) => {
  const [activeGroupId, setActiveGroupId] = useState(studentGroups[0].id);
  const activeGroup = studentGroups.find((group) => group.id === activeGroupId) || studentGroups[0];

  return (
    <section className="program-detail-section">
      <div className="section-heading-row">
        <div>
          <div className="section-kicker">Daily care</div>
          <h2>{title}</h2>
        </div>
        <p>{text}</p>
      </div>

      <div className="program-category-grid" role="tablist" aria-label="Choose a student group timetable and menu">
        {studentGroups.map((group) => (
          <button
            className={`program-category-card ${group.accent} ${activeGroup.id === group.id ? 'active' : ''}`}
            type="button"
            role="tab"
            aria-selected={activeGroup.id === group.id}
            aria-controls="active-program-panel"
            key={group.id}
            onClick={() => setActiveGroupId(group.id)}
          >
            <img src={group.image.src} alt="" loading="lazy" />
            <span>
              <CalendarDays size={20} aria-hidden="true" />
              {group.title}
            </span>
            <small>{group.ageRange}</small>
          </button>
        ))}
      </div>

      <article className={`program-detail-card ${activeGroup.accent}`} id="active-program-panel" role="tabpanel">
        <div className="program-detail-heading">
          <CalendarDays size={24} aria-hidden="true" />
          <div>
            <h3>{activeGroup.title}</h3>
            <span>{activeGroup.ageRange}</span>
          </div>
        </div>

        <div className="schedule-block">
          <h4><Clock3 size={17} aria-hidden="true" /> Timetable</h4>
          <ol className="schedule-list">
            {activeGroup.schedule.map((item) => (
              <li key={`${activeGroup.id}-${item.time}-${item.activity}`}>
                <strong>{item.time}</strong>
                <span>{item.activity}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="menu-block">
          <h4><Soup size={17} aria-hidden="true" /> Menu</h4>
          <div className="table-scroll compact" role="region" aria-label={`${activeGroup.title} menu`} tabIndex="0">
            <table className="menu-table">
              <thead>
                <tr>
                  {activeGroup.menuColumns.map((column) => (
                    <th scope="col" key={column.key}>{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activeGroup.menu.map((meal) => (
                  <tr key={`${activeGroup.id}-${meal.day}`}>
                    {activeGroup.menuColumns.map((column) => (
                      <td key={column.key}>{meal[column.key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </article>
    </section>
  );
};

export const CurriculumBlendNote = () => (
  <section className="curriculum-blend-note">
    <Sparkles size={28} aria-hidden="true" />
    <div>
      <div className="section-kicker">Curriculum blend</div>
      <h2>Montessori practice, Sipro support, Jolly Phonics, and Uganda National Curriculum foundations.</h2>
      <p>
        The school documents describe a Montessori-based approach integrated with Sipro curriculum support and Jolly Phonics. Public information around Sipro Educational Services points to Ugandan learner workbooks, teacher guides, assessment materials, phonics resources, and structured classroom support, so we present it here as a support layer that strengthens readiness and practice alongside the national framework.
      </p>
    </div>
  </section>
);

export const QuickFeePills = () => (
  <div className="quick-fee-pills" aria-label="Fee summary">
    {studentGroups.map((group) => (
      <span key={group.id}>
        <Coins size={15} aria-hidden="true" />
        {group.title}: {group.fees.monthly} monthly
      </span>
    ))}
  </div>
);