// Editable project data. Update `longDescription` to change what appears in the expanded "read more" area.
// longDescription is an array of content blocks. Supported block types:
// - { type: 'heading', text: '...' }
// - { type: 'paragraph', text: '...' }
// - { type: 'list', items: ['item1', 'item2'] }

import sombrecoverPhoto from '../assets/games-pictures/concept_art_first_lvl.png';
import shoppershavocPhoto from '../assets/games-pictures/shoppers_havoc.png';
import budsOasisPhoto from '../assets/games-pictures/buds_oasis.jpeg';

import sompbreCoreMechGif from '../assets/games-pictures/sombre-prototype/core_mechanic_sombre.gif';
import sombreTeleportGif from '../assets/games-pictures/sombre-prototype/teleportation_mechanic.gif';

const projects = [
  {
    id: 1,
    title: "BUD'S OASIS",
    role: "role: DESIGNER / ARTIST",
    genre: "CO-OP COUCH GAME",
    description: "Developed during the Franco-Belge Game Jam, this project earned the Community Award and was later livestreamed on Twitch.",
    longDescription: [
      { type: 'heading', text: "Overview" },
      { type: 'paragraph', text: "BUD'S OASIS is a friendly competitive/cooperative couch game created during a 48-hour game jam with people from differnt schools who were put together. I contributed to the game's design, 3D modelling and level layout." },
      { type: 'heading', text: "My role" },
      { type: 'paragraph', text: "I worked as the designer and artist: creating the main characters and the tree progression" },
      { type: 'heading', text: "Design Process -" },
      { type: 'list', items: ["The theme of this game jam was about sustainability. We moved more towards Protection of environment from the evil robots but also making it a fun experience by having two or more people being able to play together.", "One challenging aspect of this was balancing the level so it wasn't too easily winnable and also wasn't too frustrating to beat.", "Due to time constraints we weren't able to have a health bar for the tree. But it would have been a good addition for player to have a visual feedback for tree health."] },
      { type: 'heading', text: "Vidos of Trailer and Livestram clip:-" },
    ],
    technologies: ["Unity", "C#", "3D Modeling"],
    status: "Community Award Winner",
    platforms: ["PC"],
    // image: "/assets/games-pictures/buds_oasis.jpeg",
    image: budsOasisPhoto,
    demoLink: "#",
    githubLink: "#",
    playLink: "#",
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=aVt7UzyGD0I', title: 'BUD\'S OASIS trailer (https://www.youtube.com/watch?v=aVt7UzyGD0I)' },
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=3MENThg9acM&t=1s', title: 'BUD\'S OASIS livestream (https://www.youtube.com/watch?v=3MENThg9acM&t=1s)' }
    ]
  },
  {
    id: 2,
    title: "SOMBRE",
    role: "role: DESIGNER / PROJECT MANAGER",
    genre: "STORY - PUZZLE PLATFORMER",
    description: "A story-driven puzzle-platformer exploring somber themes with a unique core mechanic.",
    longDescription: [
        { type: 'heading', text: "Contributions" },
        { type: 'list', items: ["Game design and prototyping","Coordinating a team of five"] },
      { type: 'heading', text: "Design Pillars" },
      { type: 'list', items: ["Discovery Within Narrative - Players discover story through narrative and visual storytelling, it is up to the player to interpret it the way they want to.", "Ability Driven Problem Solving - Each puzzle has an ideal solution, however the player is encoraged to solve it their own way and think of differnt solutions", "Low Difficulty Progression - The puzzles progressively get more difficult after each stage has been passed and a new ability is introdiced"] },
      { type: 'heading', text: "CORE MECHANIC - SHADOW MANIPULATION" },
      { type: 'paragraph', text: "I wanted to do something with shadows since there are already a lot of games where you use shadows as colliders to hide from the search light I thought it would be cool if instead of you hiding in the shadows you could use them as a power. This of course was very technically challenging since I wanted the colliders and mesh of the shadows to be in place of the shadows casted by the light " },
      { type: 'heading', text: "Media" },
      { type: 'paragraph', text: "Below are short GIF demos of the prototyped mechanic" },
    ],
    technologies: ["Unity", "C#", "Team Leadership"],
    status: "In Development",
    platforms: ["PC"],
    // image: "/assets/games-pictures/concept_art_first_lvl.png",
    image: sombrecoverPhoto,
    demoLink: "#",
    githubLink: "#",
    playLink: "#",
    media: [
      { type: 'gif', src: sompbreCoreMechGif, alt: 'Core mechanic demo' },
      { type: 'gif', src: sombreTeleportGif, alt: 'Teleportation mechanic' }
    ]
  },
  {
    id: 3,
    title: "SHOPPER'S HAVOC",
    role: "role: INDEPENDENT",
    genre: "Strategy / Humour",
    description: "A humorous strategy game about navigating hectic sales with a cloning mechanic.",
    longDescription: [
      { type: 'heading', text: "Core Objectives :-" },
      { type: 'heading', text: "• Complete the List -" },
      { type: 'paragraph', text: "You need to find and collect every Item on the list to be able to move on to the next level" },
      { type: 'heading', text: "• Escape the store -" },
      { type: 'paragraph', text: "Once all the items are collected, you need to get out of there as soon as you can without having any of your items stolen by any of the shoppers" },
      { type: 'heading', text: "• Outsmart the rival shoppers -" },
      { type: 'paragraph', text: "You will need to maneuver the rival shoppers and strategize the best course of action for you to be able to escape without anything being stolen. (e.g. you will be able to grab their attention and distract one of them while your clone goes and steals from the area, etc.) " },
      { type: 'heading', text: "Design notes" },
      { type: 'paragraph', text: "I designed the cloning mechanic to be easy to learn but offer depth in planning and timing." }
    ],
    technologies: ["Unity", "C#", "Game Design"],
    status: "Completed",
    platforms: ["PC"],
    // image: "/assets/games-pictures/shoppers_havoc.png",
    image: shoppershavocPhoto,
    demoLink: "#",
    githubLink: "#",
    playLink: "#",
    media: [
        { type: 'youtube', src: 'https://www.youtube.com/watch?v=CuZikGbWAc8', title: 'Shopper\'s Havoc trailer (https://www.youtube.com/watch?v=CuZikGbWAc8)' }
    ]
  }
];

export default projects;
