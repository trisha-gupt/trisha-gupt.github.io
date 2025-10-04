// Editable project data. Update `longDescription` to change what appears in the expanded "read more" area.
// longDescription is an array of content blocks. Supported block types:
// - { type: 'heading', text: '...' }
// - { type: 'paragraph', text: '...' }
// - { type: 'list', items: ['item1', 'item2'] }

const projects = [
  {
    id: 1,
    title: "BUD'S OASIS",
    role: "DESIGNER / ARTIST",
    genre: "CO-OP COUCH GAME",
    description: "Developed during the Franco-Belge Game Jam, this project earned the Community Award and was later livestreamed on Twitch.",
    longDescription: [
      { type: 'heading', text: "Overview" },
      { type: 'paragraph', text: "BUD'S OASIS is a friendly competitive/cooperative couch game created during a 48-hour game jam. I contributed to the game's design, 3D modelling and level layout." },
      { type: 'heading', text: "My role" },
      { type: 'paragraph', text: "I worked as the lead designer and artist: I prototyped core mechanics, created 3D assets, and implemented level interactions." },
      { type: 'heading', text: "Highlights" },
      { type: 'list', items: ["Community Award winner", "Featured on a Twitch livestream", "Prototype reached playable demo in 48 hours"] }
    ],
    technologies: ["Unity", "C#", "3D Modeling"],
    status: "Community Award Winner",
    platforms: ["PC"],
    image: "/src/assets/games-pictures/buds_oasis.jpeg",
    demoLink: "#",
    githubLink: "#",
    playLink: "#"
  },
  {
    id: 2,
    title: "SOMBRE",
    role: "DESIGNER / PROJECT MANAGER",
    genre: "STORY - PUZZLE PLATFORMER",
    description: "A story-driven puzzle-platformer exploring somber themes with a unique core mechanic.",
    longDescription: [
      { type: 'heading', text: "Design goals" },
      { type: 'paragraph', text: "SOMBRE aims to combine atmospheric storytelling with tactile puzzle mechanics that reward curiosity." },
      { type: 'heading', text: "Contributions" },
      { type: 'list', items: ["Game design and prototyping", "Programming core mechanics", "Coordinating a team of five"] },
      { type: 'heading', text: "Media" },
      { type: 'paragraph', text: "Below are short GIF demos and a trailer." }
    ],
    technologies: ["Unity", "C#", "Team Leadership"],
    status: "In Development",
    platforms: ["PC"],
    image: "/src/assets/games-pictures/concept_art_first_lvl.png",
    demoLink: "#",
    githubLink: "#",
    playLink: "#",
    media: [
      { type: 'gif', src: '/src/assets/games-pictures/sombre-prototype/core_mechanic_sombre.gif', alt: 'Core mechanic demo' },
      { type: 'gif', src: '/src/assets/games-pictures/sombre-prototype/teleportation_mechanic.gif', alt: 'Teleportation mechanic' },
      { type: 'youtube', src: 'https://www.youtube.com/embed/VIDEO_ID', title: 'Sombre trailer (replace VIDEO_ID)' }
    ]
  },
  {
    id: 3,
    title: "SHOPPER'S HAVOC",
    role: "INDEPENDENT",
    genre: "Strategy / Humour",
    description: "A humorous strategy game about navigating hectic sales with a cloning mechanic.",
    longDescription: [
      { type: 'heading', text: "Concept" },
      { type: 'paragraph', text: "SHOPPER'S HAVOC is a fast-paced strategy game inspired by chaotic shopping events. The clone mechanic allows for interesting multi-agent puzzles." },
      { type: 'heading', text: "Design notes" },
      { type: 'paragraph', text: "I designed the cloning mechanic to be easy to learn but offer depth in planning and timing." }
    ],
    technologies: ["Unity", "C#", "Game Design"],
    status: "Completed",
    platforms: ["PC"],
    image: "/src/assets/games-pictures/shoppers_havoc.png",
    demoLink: "#",
    githubLink: "#",
    playLink: "#"
  }
];

export default projects;
