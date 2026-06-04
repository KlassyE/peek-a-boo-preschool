export const images = {
  logo: '/images/logo.webp',
  welcome: '/images/Welcome%20note.webp',
  mission: '/images/our%20mission.webp',
  purpose: '/images/our%20purpose.webp',
  story: '/images/our%20story.webp',
  values: '/images/our%20values.webp',
  whyParentsOne: '/images/why%20parents%201.webp',
  whyParentsTwo: '/images/why%20parents%202.webp',
};

export const galleryItems = [
  {
    id: 'welcome',
    title: 'Welcome Note',
    caption: 'Partners in parenting, nurturing every child\'s heart, mind, and spirit.',
    src: images.welcome,
    accent: 'blue',
  },
  {
    id: 'mission',
    title: 'Our Mission',
    caption: 'Dynamic, nurturing programs that support early learning across development.',
    src: images.mission,
    accent: 'green',
  },
  {
    id: 'purpose',
    title: 'Our Purpose',
    caption: 'Walking hand-in-hand with parents as children grow confident, kind, and curious.',
    src: images.purpose,
    accent: 'orange',
  },
  {
    id: 'story',
    title: 'Our Story',
    caption: 'A loving play space growing into a trusted preschool and second home.',
    src: images.story,
    accent: 'red',
  },
  {
    id: 'values',
    title: 'Our Values',
    caption: 'Love, care, trust, creativity, patience, and spiritual development.',
    src: images.values,
    accent: 'purple',
  },
  {
    id: 'parents-one',
    title: 'Why Parents Choose Us',
    caption: 'Holistic development and strong parent partnerships.',
    src: images.whyParentsOne,
    accent: 'blue',
  },
  {
    id: 'parents-two',
    title: 'Family Support',
    caption: 'Tailored support, school readiness, and a safe, joyful, loving environment.',
    src: images.whyParentsTwo,
    accent: 'green',
  },
];

export const values = [
  'Love and care',
  'Trust',
  'Creativity',
  'Patience',
  'Spiritual development',
];

export const parentReasons = [
  'Holistic development for heart, mind, and spirit',
  'Strong parent partnerships',
  'Tailored support through ETA Children\'s Org for children with special needs',
  'Preparation for national and international schools',
  'Safe, joyful, loving environment',
];

export const learningRhythm = [
  {
    title: 'ABC Play',
    text: 'Letters, sounds, songs, and three-letter word discovery.',
  },
  {
    title: 'Little Makers',
    text: 'Art, building, sorting, counting, and hands-on problem solving.',
  },
  {
    title: 'Big Feelings',
    text: 'Kindness, patience, sharing, prayer, stories, and confident routines.',
  },
  {
    title: 'Ready Steps',
    text: 'School readiness for national and international pathways.',
  },
];

const fullDayMenu = [
  {
    day: 'MON',
    break: 'Cinnamon tea with peanut butter and jam sandwich',
    lunch: 'Matooke, boiled rice and groundnut sauce',
    vegetable: 'Collard greens',
    fruit: 'Pineapple',
  },
  {
    day: 'TUE',
    break: 'Rice porridge mixed with milk and cookies',
    lunch: 'Steamed posho and beans',
    vegetable: 'Green spinach',
    fruit: 'Banana',
  },
  {
    day: 'WED',
    break: 'Hot chocolate milk with chapati',
    lunch: 'Irish potatoes and peas',
    vegetable: 'Collard greens',
    fruit: 'Watermelon',
  },
  {
    day: 'THU',
    break: 'Maize porridge mixed with milk and donuts',
    lunch: 'Boiled rice, sweet potato and beef',
    vegetable: 'Red spinach',
    fruit: 'Banana',
  },
  {
    day: 'FRI',
    break: 'Hot soya drink with popcorn',
    lunch: 'Vegetable stir fry spaghetti, yams and minced chicken',
    vegetable: 'Cabbage',
    fruit: 'Pineapple and watermelon',
  },
];

const fullDayMenuColumns = [
  { key: 'day', label: 'Day' },
  { key: 'break', label: 'Break' },
  { key: 'lunch', label: 'Lunch' },
  { key: 'vegetable', label: 'Vegetable' },
  { key: 'fruit', label: 'Fruit' },
];

const toddlerSchedule = [
  { time: '7:30 - 8:30', activity: 'Children arrive and breakfast is offered to children who have not eaten or are hungry.' },
  { time: '8:30 - 9:00', activity: 'Circle time.' },
  { time: '9:00 - 10:00', activity: 'Activity period with development aids for fine motor skills, language, movement and concentration.' },
  { time: '10:00 - 11:00', activity: 'Outdoor play.' },
  { time: '11:00 - 12:00', activity: 'Clean up and lunch time.' },
  { time: '12:00 - 1:00', activity: 'Storytime and half-day pickup.' },
  { time: '1:00 - 2:00', activity: 'Rest time.' },
  { time: '2:00 - 3:00', activity: 'Snack time.' },
  { time: '3:00 - 5:30', activity: 'Outdoor play and pickup time.' },
];

export const studentGroups = [
  {
    id: 'infants',
    title: 'Infants',
    ageRange: '3 months to 17 months',
    accent: 'blue',
    albumId: 'infants',
    image: {
      src: '/images/gallery/infants/infant-care-06.webp',
      alt: 'Infant smiling during attentive care time',
    },
    description: 'A safe, loving baby room where teachers work closely with parents so feeding, naps, diaper changes, play and outdoor walks feel calm and familiar.',
    highlights: [
      'Gentle settling and close parent communication',
      'Bottle, porridge, cereal, puree and yoghurt routines',
      'Group time, story time, outdoor walks, naps and play',
    ],
    fees: {
      registration: 'UGX 200,000',
      quarterly: 'UGX 2,000,000',
      monthly: 'UGX 950,000',
      weekly: 'UGX 250,000',
      daily: 'UGX 50,000',
    },
    schedule: [
      { time: '7:30 - 8:30', activity: 'Children arrive, free play and diaper change. Breakfast is offered to children who have not eaten or are hungry.' },
      { time: '8:30 - 9:30', activity: 'Breakfast time with bottle, porridge or cereal.' },
      { time: '9:30 - 10:00', activity: 'Diaper change, bottle time and nap as needed.' },
      { time: '10:00 - 11:30', activity: 'Outdoor time or walks with teachers when the child is awake.' },
      { time: '11:30 - 12:30', activity: 'Feeding and lunch time.' },
      { time: '12:30 - 1:00', activity: 'Diaper change and bottle feeding.' },
      { time: '1:00 - 2:30', activity: 'Rest time.' },
      { time: '2:40 - 3:40', activity: 'Feeding time with bottle, fruit puree or yoghurt.' },
      { time: '3:45 - 4:15', activity: 'Diaper change.' },
      { time: '4:15 - 5:30', activity: 'Outdoor time, teacher walks and pickup time.' },
    ],
    menuColumns: [
      { key: 'day', label: 'Day' },
      { key: 'break', label: 'Break' },
      { key: 'lunchSnack', label: 'Lunch and afternoon snack' },
    ],
    menu: ['MON', 'TUE', 'WED', 'THU', 'FRI'].map((day) => ({
      day,
      break: 'Porridge / cereal',
      lunchSnack: 'Puree',
    })),
  },
  {
    id: 'toddlers',
    title: 'Toddlers',
    ageRange: '18 months to 2 years',
    accent: 'green',
    albumId: 'toddlers',
    image: {
      src: '/images/gallery/toddlers/toddler-play-01.webp',
      alt: 'Toddler exploring sensory water play',
    },
    description: 'A lively room for little explorers who are learning through movement, language, sensory work, meals, naps, outdoor play and careful teacher guidance.',
    highlights: [
      'Fine motor, language, movement and concentration activities',
      'Circle time, story time, outdoor play, meals and snacks',
      'A safe environment for confident exploring and friendship',
    ],
    fees: {
      registration: 'UGX 200,000',
      quarterly: 'UGX 2,000,000',
      monthly: 'UGX 950,000',
      weekly: 'UGX 250,000',
      daily: 'UGX 50,000',
    },
    schedule: toddlerSchedule,
    menuColumns: fullDayMenuColumns,
    menu: fullDayMenu,
  },
  {
    id: 'creche',
    title: 'Creche / Playgroup',
    ageRange: '2 years to 3 years',
    accent: 'orange',
    albumId: 'toddlers',
    image: {
      src: '/images/gallery/toddlers/toddler-play-05.webp',
      alt: 'Creche learner painting leaves during sensory art',
    },
    description: 'A warm playgroup class with practical life, sensory activities, arts and crafts, pre-reading and pre-math skills that prepare children for kindergarten.',
    highlights: [
      'Practical life, sensory play, arts, crafts and early academics',
      'Name recognition, letter sounds, numbers, colors and shapes',
      'Patience, sharing, responsibility, communication and teamwork',
    ],
    fees: {
      registration: 'UGX 200,000',
      quarterly: 'UGX 1,700,000',
      monthly: 'UGX 850,000',
      weekly: 'UGX 250,000',
      daily: 'UGX 50,000',
    },
    schedule: [
      { time: '7:30 - 8:30', activity: 'Children arrive and breakfast is offered to children who have not eaten or are hungry.' },
      { time: '8:30 - 9:00', activity: 'Circle time.' },
      { time: '9:00 - 10:00', activity: 'Work period with development aids for fine motor skills, language, movement and concentration.' },
      { time: '10:00 - 11:00', activity: 'Outdoor play.' },
      { time: '11:00 - 12:00', activity: 'Clean up and lunch time.' },
      { time: '12:00 - 1:00', activity: 'Storytime and half-day pickup.' },
      { time: '1:00 - 2:00', activity: 'Rest time.' },
      { time: '2:00 - 3:00', activity: 'Snack time.' },
      { time: '3:00 - 5:30', activity: 'Outdoor play and pickup time.' },
    ],
    menuColumns: fullDayMenuColumns,
    menu: fullDayMenu,
  },
];

export const programFeeLabels = [
  { key: 'registration', label: 'Non-refundable registration fee' },
  { key: 'quarterly', label: 'Fee per quarter' },
  { key: 'monthly', label: 'Fee per month' },
  { key: 'weekly', label: 'Fee per week' },
  { key: 'daily', label: 'Fee per day' },
];

export const wordRounds = [
  {
    word: 'SUN',
    clue: 'Warm light in the sky',
    cheer: 'Bright thinking!',
  },
  {
    word: 'BUS',
    clue: 'It takes friends to school',
    cheer: 'Off we go!',
  },
  {
    word: 'HAT',
    clue: 'It sits on your head',
    cheer: 'Top work!',
  },
  {
    word: 'CUP',
    clue: 'You drink from it',
    cheer: 'Sip sip hooray!',
  },
  {
    word: 'MAP',
    clue: 'It helps you find a place',
    cheer: 'You found it!',
  },
  {
    word: 'PEN',
    clue: 'It writes lines and letters',
    cheer: 'Nice mark making!',
  },
];