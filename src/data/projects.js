// Editable project data. Update `longDescription` to change what appears in the expanded "read more" area.
// longDescription is an array of content blocks. Supported block types:
// - { type: 'heading', text: '...' }
// - { type: 'paragraph', text: '...' }
// - { type: 'list', items: ['item1', 'item2'] }

import sombrecoverPhoto from "../assets/games-pictures/concept_art_first_lvl.png";
import shoppershavocPhoto from "../assets/games-pictures/shoppers_havoc.png";
import budsOasisPhoto from "../assets/games-pictures/buds_oasis.jpeg";

// GIF thumbnail assets
import budsOasisThumbnail from "../assets/games-pictures/buds-oasis/buds-oasis-thumbnail.mp4";
import sombreThumbnailGif from "../assets/games-pictures/sombre-prototype/sombre-thumbnail-compressed.mp4";
import shoppershavocThumbnail from "../assets/games-pictures/shoppers-havoc/shoppers-havoc-thumbnail-compressed.mp4";

//web of lies assets
import webOfLies from "../assets/games-pictures/web_of_lies_cover.png";
import webOfLiesDemo from "../assets/games-pictures/wol_demo_questions.jpg";
import webOfLiesScreenshot from "../assets/games-pictures/web_of_lies_sc2.png";
import wol_win_lose_bg from "../assets/games-pictures/web_of_lies_endings/win_lose_ending_bg.png";
import wol_lose_win_bg from "../assets/games-pictures/web_of_lies_endings/lose_win_ending_bg.png";
import wol_lose_lose_bg from "../assets/games-pictures/web_of_lies_endings/lose_lose_ending_bg.png";
import wol_win_win_bg from "../assets/games-pictures/web_of_lies_endings/win_win_ending_bg.png";

// sombre assets
import sombreCoreMechGif from "../assets/games-pictures/sombre-prototype/core_mechanic_sombre.gif";
import sombreTeleportGif from "../assets/games-pictures/sombre-prototype/teleportation_mechanic.gif";
import sombreBombGif from "../assets/games-pictures/sombre-prototype/Bomb_shadow_prototype.gif";
import sombreProgressGif from "../assets/games-pictures/sombre-prototype/shadow_game_progress.gif";
import sombreTrailer from "../assets/games-pictures/sombre-prototype/sombre-trailer-compressed.mp4";

// Level breakdown gifs - Area 1
import sombrePitGif from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/the_pit_gif.webm"; /* CONVERTED */
import sombreArea1IntroSparkle from "../assets/games-pictures/sombre-prototype/Area_1_intro-sparkle-surface.gif";
import sombreArea1IntroPuzzle from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/Area_1_intro-puzzle.webm"; /*CONVERTED BUT NO USE */
//Area 2 gifs
import sombreArea2outlook from "../assets/games-pictures/sombre-prototype/Area_2_outlook.gif";
import sombreArea2orbintro from "../assets/games-pictures/sombre-prototype/Area_2_shadow_orbs_2.gif";
import sombreArea2buttonintro from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/Area_3_button_intro.webm"; /*CONVERTED */
import sombreArea2pianopuzzle from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/Area_2_piano_puzzle.webm"; /*CONVERTED WITH ERROR */
import sombreArea2finalpuzzle from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/Area_2_final_puzzle.webm"; /*CONVERTED */
//Area 3 gifs
import sombreArea3outlook from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/Area_3_outlook.webm"; /*CONVERTED */
import sombreArea3intro from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/Area_3_teleportation_intro.webm"; /*CONVERTED */
import sombreArea3difficultyspike from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/Area_3_difficulty_spike.webm"; /* CONVERTED WITH ERROR */
import sombreArea3end from "../assets/games-pictures/sombre-prototype/sombre-WebM-files/Area_3_the_end.webm"; /* CONVERTED */
//Sombre Prototype Images & Gifs
import sombreDenialPuzzles from "../assets/games-pictures/sombre-prototype/sombre-Images/denial_puzzles_1.png";
import sombreAngerPuzzles from "../assets/games-pictures/sombre-prototype/sombre-Images/anger_puzzles.png";
import sombreLevelDesignWriteup from "../assets/games-pictures/sombre-prototype/sombre-Images/level_design_writeup.png";
import sombreMiroIterations from "../assets/games-pictures/sombre-prototype/Miro_Iterations.gif";
import sombreMoodboard from "../assets/games-pictures/sombre-prototype/sombre-Images/moodboard.png";
import sombreDenialMood from "../assets/games-pictures/sombre-prototype/sombre-Images/denial_mood.png";
import sombreDepressionMood from "../assets/games-pictures/sombre-prototype/sombre-Images/depression_mood.png";
import sombreRageMood from "../assets/games-pictures/sombre-prototype/sombre-Images/anger_mood.png";
import sombreAccetanceMood from "../assets/games-pictures/sombre-prototype/sombre-Images/acceptance_mood.png";

//DinoDuckMayhem Assets - Cover
import ddmCoverPhoto from "../assets/games-pictures/Internship/Mayhem_cover.webm"; /* CONVERT */

// shopper's havoc assets
import shoppershavocGameplayLoop from "../assets/games-pictures/shoppers-havoc/shoppers-havoc-gameplay-loop.png";
import shoppershavocPOC from "../assets/games-pictures/shoppers-havoc/shoppers-havoc-poc.png";

const projects = [
  {
    id: 1,
    title: "DINO DUCK MAYHEM",
    role: "role: Game Designer/ Programmer",
    genre: "TWIN STICK SHOOTER",
    description:
      "I was a part of the production of this shipped title - Dino Duck Mayhem - during my internship at Duckosaurus Games.",
    longDescription: [
      {
        type: "heading",
        text: "Overview",
      },

      {
        type: "columns",
        items: [
          [
            {
              type: "paragraph",
              text: "I worked on Dino Duck Mayhem as a part of my end of year internship as a game designer and developer, where I attended daily dev scrums and was closely involved in a team of 4 developers",
            },
            {
              type: "paragraph",
              text: "I will break down the parts of this project that I was involved with and explain the process.",
            },
          ],
          [
            {
              type: "paragraph",
              text: "This game had already been in production for one year when I had joined the team. I had to learn how to use the godot interphase and work around the existing code base",
            },
            {
              type: "paragraph",
              text: [
                "I was in charge of a big part of the ",
                {
                  accent: true,
                  text: "Design changes proposals and Narrative Design",
                },
                " (through code), and making sure the game was ",
                {
                  accent: true,
                  text: " fun to play",
                },
                ". This involved a couple of iterations for the camera and controller.",
              ],
            },
          ],
        ],
      },
    ],
    technologies: ["Godot", "Miro", "Source Tree", "Git"],
    status: "completed",
    thumbnail: ddmCoverPhoto,
    teamSize: "4 people",
    demoLink: "#",
    githubLink: "#",
    playLink: "#",
  },
  {
    id: 2,
    title: "SOMBRE",
    role: "role: Designer / Programmer",
    genre: "STORY - PUZZLE PLATFORMER",
    description:
      "A story-driven puzzle-platformer exploring somber themes with a unique core mechanic.",
    longDescription: [
      {
        type: "columns",
        items: [
          [
            { type: "heading", text: "Overview" },
            { type: "paragraph", text: "" },
            {
              type: "paragraph",
              text: "Sombre is a story-based 3D puzzle platformer in which you discover you have the ability to manipulate your shadows. With no memories of your past or how you got here, you must uncover the story as you progress through different stages while learning how to use your shadow abilities.",
            },
            {
              type: "paragraph",
              text: "Within this project page, I will break down the tasks I was involved in and how I tackled them.",
            },
          ],
          [
            { type: "heading", text: "Project details" },
            {
              type: "paragraph",
              text: "This game was made over a duration of four months for a group project class. The game initially had four stages, where each stage correlated to the stages of grief. However, due to time constraints, we were only able to complete one stage -Denial- as a vertical slice.",
            },
            {
              type: "paragraph",
              text: [
                "I was in charge of a big part of the ",
                {
                  accent: true,
                  text: "puzzle design, translating them into Unity",
                },
                " (through code), and making sure ",
                {
                  accent: true,
                  text: "they were fun to play",
                },
                ". This involved a couple of iterations for the camera and controller.",
              ],
            },
          ],
        ],
      },

      { type: "heading", text: "Trailer" },

      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=smptLx9C3Dk",
        title: "SOMBRE trailer (https://www.youtube.com/watch?v=smptLx9C3Dk)",
      },

      // Level breakdown - talk about how the level is laied out
      {
        type: "heading",
        text: "Level Breakdown",
      },

      {
        type: "heading",
        variant: "secondary",
        text: "Area 1",
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [
            {
              type: "gif",
              src: [sombrePitGif],
              alt: "Core mechanic demo",
            },
          ],
          [
            { type: "heading", text: "The Pit" },
            {
              type: "paragraph",
              text: [
                "This is the",
                { accent: true, text: " introduction of the core mechanic. " },
                "The player is expected to use the shadow manipulation ability to get out of the pit and progress further into the level.",
              ],
            },
            {
              type: "paragraph",
              text: "The player is introduced to an NPC who also acts as a tutorial. (inspired by Toriel from the game Undertale). They tell you what controls you need to use in order to activate your ability.",
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [
            {
              type: "gif",
              src: [sombreArea1IntroSparkle],
              alt: "Core mechanic Intro",
            },
          ],
          [
            { type: "heading", text: "Information" },
            {
              type: "paragraph",
              text: "The player learns two things in this area.",
            },
            {
              type: "paragraph",
              text: [
                "1 - Shadows can only be placed on ",
                { accent: true, text: " specific surfaces." },
                " The player has to use this information immediately as it will be recurring throughout the game.",
              ],
            },
            {
              type: "paragraph",
              text: [
                "2 - Shadows are ",
                { accent: true, text: " Physical objects" },
                " that have the ability to interact with other physical objects in the game.",
              ],
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [
            {
              type: "gif",
              src: [sombreArea2outlook],
              alt: "Core mechanic demo",
            },
          ],
          [
            { type: "heading", text: "The Obstacle" },
            {
              type: "paragraph",
              text: [
                "The player must",
                { accent: true, text: " use " },
                "their",
                { accent: true, text: " previous knowledge" },
                " to now solve an obstacle course that requires them to place a shadow to move a box in the deadly vines.",
              ],
            },
            {
              type: "paragraph",
              text: [
                "They are expected to use this box as leverage to jump over the deadly vines to complete a small obstacle course.",
              ],
            },
          ],
        ],
      },

      // Area 2 - The Obstacle

      {
        type: "heading",
        variant: "secondary",
        text: "Area 2",
      },

      {
        type: "columns",
        variant: "text-left",
        items: [
          [
            {
              type: "heading",
              text: "NPC Intro + Puzzles",
            },
            {
              type: "paragraph",
              text: "In this area, the player is introdced to an NPC - Ima. She seems to be in her own world. And also wants to get out of this place. ",
            },
            {
              type: "paragraph",
              text: [
                "She informs you about being able to pick up light sources. The player is able to",
                { accent: true, text: " place a light source" },
                " where they wish to create a shadow they need, and are expected to use this information to solve the next puzzle.",
              ],
            },
          ],
          [
            {
              type: "gif",
              src: [sombreArea3outlook],
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-left",
        items: [
          [
            {
              type: "heading",
              text: "Button Introduction",
            },
            {
              type: "paragraph",
              text: [
                "Player is introduced to a pressure plate.",
                { accent: true, text: " A simple puzzle" },
                " is presented to them in order for them to learn about it's existance",
              ],
            },
            {
              type: "paragraph",
              text: "The pressure plate will be reccuring for the player to get used to the mechanics.",
            },
          ],
          [
            {
              type: "gif",
              src: [sombreArea2buttonintro],
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-left",
        items: [
          [
            {
              type: "heading",
              text: "Orbs",
            },
            {
              type: "paragraph",
              text: [
                "The player is pointed towards their ",
                { accent: true, text: "orbs" },
                ". Orbs show you how many shadows the player can cast at a time as a ",
                { accent: true, text: "diegetic UI. " },
                "A simple puzzle is used to demonstrate the use of multiple shadows",
              ],
            },
            {
              type: "paragraph",
              text: "Once a shadow is placed, the orbs update to the remaining amount of shadows a player has.",
            },
          ],
          [
            {
              type: "gif",
              src: [sombreArea2orbintro, sombreArea2pianopuzzle],
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-left",
        items: [
          [
            {
              type: "heading",
              text: "Final Puzzle",
            },
            {
              type: "paragraph",
              text: [
                "At the end of this area, the player is expected to use the previously learnt knowledge, such as ",
                {
                  accent: true,
                  text: "orbs, light pick ups and pressure plates",
                },
                " to get through this area.",
              ],
            },
            {
              type: "paragraph",
              text: "This allows repetetion for the player. Where they are able to get more comfortable with the puzzles where there's not much intensivity",
            },
          ],
          [
            {
              type: "gif",
              src: [sombreArea2finalpuzzle],
            },
          ],
        ],
      },

      //Area 3 start - Teleport shadows

      {
        type: "heading",
        variant: "secondary",
        text: "Area 3",
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [
            {
              type: "gif",
              src: [sombreArea3intro],
            },
          ],
          [
            {
              type: "heading",
              text: "Teleport Shadow",
            },
            {
              type: "paragraph",
              text: [
                "This is the first time that the player is introduced to a different type of shadow.",
              ],
            },
            {
              type: "paragraph",
              text: [
                "The controls to place the shadow and activate are the same as the previous type. The only difference is in the ability. This can be noticed by ",
                { accent: true, text: "different colored lights and platform" },
              ],
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [
            {
              type: "gif",
              src: [sombreArea3difficultyspike],
            },
          ],
          [
            {
              type: "heading",
              text: "Dificulty spike",
            },
            {
              type: "paragraph",
              text: [
                "Eventually, the player is faced with a puzzle that ",
                { accent: true, text: "combines both the shadow types" },
                " and gives the player ",
                { accent: true, text: "3 shadows" },
                " to use.",
              ],
            },
            {
              type: "paragraph",
              text: [
                "This area requires the players to understand the mechanic and use the resources they have. There is ",
                { accent: true, text: " no time limit " },
                "which gives them room to play around with the mechanics and think of an approach to solve it.",
              ],
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [
            {
              type: "gif",
              src: [sombreArea3end],
            },
          ],
          [
            {
              type: "heading",
              text: "The End",
            },
            {
              type: "paragraph",
              text: [
                "The final puzzle consists of a simple lever mechnaic and the use of just the teleportation shadow.",
              ],
            },
            {
              type: "paragraph",
              text: "This is meant to contrast the previous defficulty spike and make the player feel releaved before finally concluding the game.",
            },
          ],
        ],
      },

      //Prototyping

      {
        type: "heading",
        text: "Prototyping",
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [
            {
              type: "gif",
              src: [sombreCoreMechGif],
              alt: "Core mechanic demo",
            },
          ],

          [
            {
              type: "heading",
              text: "Core Mechanic",
            },
            {
              type: "paragraph",
              text: "This was the very first working prototype of the core mechanic. It is also the first mechanic that the player is introduced to.",
            },
            {
              type: "paragraph",
              text: "Most of the gameplay revolves around placing the shadows in the right spot. The player is introduced to new shadow abilities as the game progresses.",
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-left",
        items: [
          [
            {
              type: "heading",
              text: "Teleport Variant",
            },
            {
              type: "paragraph",
              text: "This is a varriation of the first ability, it lets the player teleport to the shadows that are placed within a certain distance form the player.",
            },
            {
              type: "paragraph",
              text: "This ability is introduced halfway through the first stage, this is done so the players can get used to the mechanics and later on, they are expected to combine these abilities to solve some puzzles.",
            },
          ],

          [
            {
              type: "gif",
              src: [sombreTeleportGif],
              alt: "Core mechanic demo",
            },
          ],
        ],
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [
            {
              type: "gif",
              src: [sombreBombGif],
              alt: "Bomb shadow demo",
            },
          ],
          [
            {
              type: "heading",
              text: "Bomb Variant",
            },
            {
              type: "paragraph",
              text: [
                "This was the third variant for this shadow type, which never got used in the final version due to time constraints.",
              ],
            },
            {
              type: "paragraph",
              text: [
                " The idea was that the shadow itself would be a bomb which if activated, has a ceratin time limit for explosion. There will be a few",
                { accent: true, text: " explodable objects" },
                " which will leave some debris behind. This debris can be picked up and used for pressure plates, etc.",
              ],
            },
          ],
        ],
      },

      { type: "heading", variant: "secondary", text: "Gameplay Layout" },

      {
        type: "paragraph",
        text: [
          "During prototyping, I had come up with two levels. The idea was to take the player through the ",
          { accent: true, text: "different stages of grief " },
          "where they would meet an NPC representing their stage of grief.",
          " The two images shown below represents the ",
          { accent: true, text: "layout of each puzzle" },
          " in the denial section as well as anger. Though anger was never able to make it into the final version due to time constraints",
        ],
      },

      {
        type: "columns",
        items: [
          [
            {
              type: "paragraph",
              text: [
                "A prototype made in unity for all the puzzles within",
                { accent: true, text: " denial" },
              ],
            },
            {
              type: "image",
              src: sombreDenialPuzzles,
            },
          ],
          [
            {
              type: "paragraph",
              text: [
                "A prototype made in unity for all the puzzles within",
                { accent: true, text: " anger" },
              ],
            },
            {
              type: "image",
              src: sombreAngerPuzzles,
            },
          ],
        ],
      },

      {
        type: "heading",
        variant: "secondary",
        text: "Level Design",
      },

      {
        type: "columns",
        variant: "text-right",
        items: [
          [{ type: "image", src: sombreLevelDesignWriteup }],
          [
            {
              type: "paragraph",
              text: [
                "With the help of my colegues, I had written down a basic structure for all the puzzles within the different stages of grief",
              ],
            },
            {
              type: "paragraph",
              text: [
                "Each of these stages would have a different visual layout.",
                { accent: true, text: " Some visual clues" },
                " about how the NPC within each stage died. ",
              ],
            },
            {
              type: "paragraph",
              text: "As the player progresses, they will slowly find out how they had died through visual and audio cues. Which will bring them into the acceptance stage.",
            },
            {
              type: "paragraph",
              text: [
                "*",
                { accent: true, text: "Note" },
                " that not all of these made into the final version and this was just the prototyping stage.*",
              ],
            },
          ],
        ],
      },

      {
        type: "heading",
        variant: "secondary",
        text: "Moodboard",
      },

      {
        type: "image",
        src: sombreMoodboard,
      },
      {
        type: "paragraph",
        text: "Different color scemes for each level",
      },
      {
        type: "image-row",
        items: [
          { src: sombreDenialMood },
          { src: sombreRageMood },
          { src: sombreDepressionMood },
          { src: sombreAccetanceMood },
        ],
      },
      {
        type: "paragraph",
        text: [
          { accent: true, text: "Note: " },
          "None of these art pieces were drawn by me. These were mostly taken off of pinterest or google to get an idea of the basic color schemes that we could go off of for each stage. They were further iterated on by the artists.",
        ],
      },

      {
        type: "heading",
        text: "Iterations",
      },
      {
        type: "paragraph",
        text: "Below are some recorded iterations I had made for the project",
      },
      {
        type: "gif",
        src: sombreMiroIterations,
      },

      // { type: "heading", text: "My responsibilities" },
      // {
      //   type: "list",
      //   items: [
      //     "I had worked on the lever system. A couple gameplay mechanics as well as bug fixing and playtesting the game.",
      //     "Implementing different types of shadows (teleportation, lift and explosion types) Only teleportation and lift were able to get into the game because of time constraints.",
      //     "Level Design and final layout of the first and second level (second level was not able to be in the game).",
      //     "Playtesting and iterating on the level design while gauging how the players react to certain elements of the mechanic and writing down changes required for a particular area of the puzzle.",
      //     "I had programmed a prototype of different shadow types and the base shadow mechanic for the project",
      //   ],
      // },

      // { type: "paragraph", text: "" }, // blank space to separate

      // { type: "heading", text: "Where it had succeeded" },
      // {
      //   type: "list",
      //   items: [
      //     "This project was able to grab the attention of our target audience, the player satisfaction varied depending on their problem solving abilities.",
      //     "I feel like this project eventually became a huge learning experience for me as a game designer by having constant playtesting sessions and player feedback, it made me better understand how to level design for puzzle games.",
      //     "This project was filled with technical difficulties and setbacks due to the shadow system being so challenging and time consuming to figure out. Despite of this, the team as a whole was able to persevere and it taught me how to better adapt my abilities within a team.",
      //   ],
      // },
      // { type: "paragraph", text: "" }, // blank space to separate

      // {
      //   type: "heading",
      //   text: "Challenges I faced on the project as a Designer",
      // },
      // {
      //   type: "list",
      //   items: [
      //     "One of the most challenging parts of this project as a designer was the fact that while designing puzzles, you never know how people are going to approach it. Everyone has their own way of approaching a problem to solve.",
      //     "I’ve also learnt the amount of playtesting needed for a puzzle platformer has to be at a much larger scale since you need to try to adhere to a good balance of people who are great at solving problems and people who take longer. I’ve also had to make sure that the level of difficulty stayed somewhat similar throughout the different types of audience.",
      //   ],
      // },
    ],
    technologies: ["Unity", "Miro", "HacknPlan"],
    status: "completed",
    // image: "/assets/games-pictures/concept_art_first_lvl.png",
    image: sombrecoverPhoto,
    thumbnail: sombreThumbnailGif,
    teamSize: "6 People",
    demoLink: "#",
    githubLink: "#",
    playLink: "#",
    media: [
      //{ type: 'video', src: sombreTrailer, alt: 'SOMBRE trailer' },
    ],
  },
  {
    id: 3,
    title: "BUD'S OASIS",
    role: "role: DESIGNER / ARTIST",
    genre: "CO-OP COUCH GAME",
    description:
      "Developed during the Franco-Belge Game Jam, this project earned the Community Award and was later livestreamed on Twitch.",
    longDescription: [
      { type: "heading", text: "Overview" },

      {
        type: "columns",
        items: [
          [
            {
              type: "paragraph",
              text: "Developed during the Franco-Belge Game Jam, this project earned the Community Award and was later livestreamed on Twitch.",
            },
          ],
          [
            {
              type: "paragraph",
              text: "This was a 48 hour game jam project that was created with people from 4 different schools who were put together on random. The theme of the game jam was sustainability and we had a brainstorming session about a couch co - op game.",
            },
          ],
        ],
      },

      { type: "heading", text: "Trailer-" },
      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=aVt7UzyGD0I",
        title:
          "BUD'S OASIS trailer (https://www.youtube.com/watch?v=aVt7UzyGD0I)",
      },

      { type: "heading", text: "Achievement" },
      {
        type: "paragraph",
        text: "This project won the community award as the game which was the most fun to play.",
      },
      /*       { type: 'paragraph', text: "BUD'S OASIS is a friendly competitive/cooperative couch game created during a 48-hour game jam with people from 4 different schools who were put together. You also have the option to play this solo but it's always recommended to play with friends, it's simply much more fun that way. " },
      {type: 'paragraph', text: "You (and your friends) are in charge of maintaining the last remaining life form on earth. You have to fend off the evil robots that are out there to destroy the tree by picking up the flowers that grow around it and throwing them. Once you've collected enough flowers you will be able to plant a seed with it which will make more flowers of the same color grow around the area, but be careful! This also increased the spawn rate of the enemies."}, */
      {
        type: "paragraph",
        text: "a short gameplay of it that was livestreamed -",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=3MENThg9acM&t=1s",
        title:
          "BUD'S OASIS livestream (https://www.youtube.com/watch?v=3MENThg9acM&t=1s)",
      },

      { type: "heading", text: "My responsibilities" },
      {
        type: "list",
        items: [
          "I was responsible for the main 3d assets in the game such as the character and the flowers.",
          "I had implemented the sound and created videos for the trailer of the game.",
          "Game Design - bridging the gap between programming and art.",
        ],
      },

      { type: "heading", text: "Challenges in Design -" },
      {
        type: "list",
        items: [
          " The theme of this game jam was sustainability. We moved more towards the protection of the environment from the evil robots but also making it a fun experience by having two or more people be able to play together.",
          "There were quite a few things missing from the game due to time constraints. The feedback received was that there was not enough player feedback for when the tree was hit or who your character was. Going back, I would have added visual clarity for these mechanics - it would have made it so that the players had an easier time getting used to the game.",
          "Another challenging aspect of this game was balancing the level in such a way that it isn’t too easily winnable and also wasn't too frustrating to beat.",
        ],
      },
      /*       { type: 'paragraph', text: "- The theme of this game jam was sustainability. We moved more towards the protection of the environment from the evil robots but also making it a fun experience by having two or more people be able to play together." },
      {type: 'paragraph', text: "- One challenging aspect of this was balancing the level so it wasn't too easily winnable and also wasn't too frustrating to beat."},
      {type: 'paragraph', text: "- Due to time constraints we weren't able to have a health bar for the tree. But it would have been a good addition for players to have visual feedback for tree health."}, */
    ],
    technologies: ["Blender", "Unity"],
    status: "Community Award Winner",
    // image: "/assets/games-pictures/buds_oasis.jpeg",
    image: budsOasisPhoto,
    thumbnail: budsOasisThumbnail,
    teamSize: "6 People",
    demoLink: "#",
    githubLink: "#",
    playLink: "https://mms5004.itch.io/i-scream-metal",
    media: [
      //{ type: 'youtube', src: 'https://www.youtube.com/watch?v=aVt7UzyGD0I', title: 'BUD\'S OASIS trailer (https://www.youtube.com/watch?v=aVt7UzyGD0I)' },
    ],
  },
  /*     {
    id: 3,
    title: "WEB OF LIES",
    role: "role: GAMEPLAY DESIGNER",
    genre: "Narrative - local Co-op",
    description: "This was a 2 day game jam game. The theme given was spread it and we won #2 in the most unique idea out of 30 other games.",
    longDescription: [
      { type: 'heading', text: "context" },
      { type: 'paragraph', text: "This game was made in two days for a game jam whose theme was -spread it- and we had chosen to spread lies. I worked on the core design along with writing dialogues with another design in the project" },
      { type: 'heading', text: "Overview" },
      { type: 'paragraph', text: "Can you get yourself and your partner out of your web of lies? You and a friend of your choice will play as <strong>2 suspects</strong> in a mysterious <strong>murder case</strong>. You both don't know how you got there. But whatever it may be, the detective wants answers now! You both need to come up with <strong>alibis</strong> and <strong>stick to it</strong>. You will also need to <strong>remember</strong> what the other person had said as their alibis to <strong>match them</strong>" },
      { type: 'paragraph', text: "This game tests your memories and trust. Will you be able to <strong>stay consistent</strong> with the web that you've created together? The core gameplay involves answering the questions that the detective throws at you through 4 options given at the bottom of your screen such as shown here"},
      { type: 'image-row', items: [
        { src: webOfLiesDemo, alt: 'WebOfLies screenshot' },
        { src: webOfLiesScreenshot, alt: 'WebOfLies polished screeshot' }
      ] },

      { type: 'heading', text: "Core Design"},
      { type: 'paragraph', text: "This game takes place in two phases - the story building phase and the answering phase."},
      { type: 'list', items: ["Phase one - Story building phase"]},
      { type: 'paragraph', text: "The questioning phase involves questioning each person about 4 things in relation to the victim - What job they do, What their relationship was with the victim, their location and what they were doing at the time of the murder. Once each player gives their answers, they will also have to remember the others' answers and this phase will be over then, starting the answering phase"},
      { type: 'list', items: ["Phase two - Answering Phase"] },
      { type: 'paragraph', text: "In the answering phase, the detective now knows your story. And will try their best to poke holes in it. The moment they catch either of you straying off your alibis, his <strong>suspicion meter</strong> will increase. The questions for this phase can vary. There will be moments where players are able to betray the other by telling them that they would be spared at the expense of the other"},

      {type: 'heading', text: "Questions design choices"},
      {type: 'paragraph', text: "- Sometimes the players get asked yes or no questions about what they had answered previously. I.e. if the player had said they were in the living room at the time of the murder, the detective would ask where they were and based on whether their answer was wrong or right he would give them a lighthearted comment. The overall tone for the detective is heavy but he has a strong character."},
      {type: 'paragraph', text: "- We have also designed some questions where the detective asks a player questions about the other player to see how much attention they were paying to them and could match what they were saying. Getting these wrong would raise suspicion on both of you and not just you alone."},
      {type: 'paragraph', text: "- We also tried to design some questions which would potentially betray the trust of each other. i.e :"},
      {type: 'list', items: ["Detective - I will offer one of you an out but someone will have to pay for this! Lorraine, make your decision. "]},
      {type: 'list', items: ["I'm guilty", "Rick is guilty", "I'm not saying anything to the likes of you"]},

      {type: 'heading', text: "Multiple endings"},
      {type: 'paragraph', text: "In web of lies, you have a total of 4 endings depending on how players answer their questions -"},
      {type: 'paragraph', text: "1. Ending One - player one (Rick) gets caught while the second player is free through betrayal"},
      {type: 'image', src: wol_lose_win_bg, alt: 'WOL ending 1 - lose win'},
      {type: 'paragraph', text: "2. Ending Two - player two (Lorraine) gets caught while the first player is free through betrayal"},
      {type: 'image', src: wol_win_lose_bg, alt: 'WOL ending 2 - win lose'},
      {type: 'paragraph', text: "3. Ending Three - both players get caught as their suspection meter maxes out"},
      {type: 'image', src: wol_lose_lose_bg, alt: 'WOL ending 3 - lose lose'},
      {type: 'paragraph', text: "4. Ending Four - both players get away scot free as they successfully stick to their alibis"},
      {type: 'image', src: wol_win_win_bg, alt: 'WOL ending 4 - win win'},
    ],
    technologies: ["Unity", "Miro"],
    image: webOfLies,
    thumbnail: webOfLies,
    playLink: 'https://razvanluca.itch.io/web-of-lies-spreading-misinformation'
  }, */
  {
    id: 4,
    title: "SHOPPER'S HAVOC",
    role: "role: GENERALIST",
    genre: "Strategy / Humour",
    description:
      "A humorous strategy game about navigating hectic sales with a cloning mechanic.",
    longDescription: [
      { type: "heading", text: "Trailer" },
      {
        type: "youtube",
        src: "https://www.youtube.com/watch?v=CuZikGbWAc8",
        title:
          "Shopper's Havoc trailer (https://www.youtube.com/watch?v=CuZikGbWAc8)",
      },
      { type: "paragraph", text: "" }, // blank space to separate

      { type: "heading", text: "Project Overview" },
      {
        type: "list",
        items: [
          "This was an Independent project for a game design class where I was responsible for everything in the game including programming, design and art. I had worked on this project for one week including the time spent for brainstorming and iterations. ",
          "I used the paper prototyping method for this. I find it to be a lot faster and iterations on a paper prototype take about 3 minutes as compared to a potential 10 minutes for an engine prototype.",
          "This was a project that was more focused on a mechanics first approach with some humorous content added through the story and characters. I chose to first focus on the mechanics being fun to play through paper prototyping and then moved on to the game also having rich characters with personalities that would bring a fun experience to the players.",
        ],
      },
      {
        type: "image",
        src: shoppershavocGameplayLoop,
        alt: "Shopper's Havoc gameplay loop",
      },
      { type: "paragraph", text: "" }, // blank space to separate

      { type: "heading", text: "Iterations " },
      {
        type: "list",
        items: [
          "This project had initially started as a turn based game which went through multiple iterations throughout the paper prototyping and later, Unity prototyping as well to make sure that the paper prototype has been translated well within the engine.",
          "Below is a screenshot of the Proof of concept for this game. I had tested it out through paper prototyping and came to the conclusiton to make it in Unity and get more player feedback",
        ],
      },
      {
        type: "image",
        src: shoppershavocPOC,
        alt: "Shopper's Havoc early prototype",
      },
      { type: "paragraph", text: "" }, // blank space to separate
      {
        type: "list",
        items: [
          "It is important to know what kind of a game would require a paper prototype and when you should switch to an engine to get the player experience you want. For this project, even though it had started as a paper prototype, I couldn’t quite get the player experience right. It was a fast paced game and you can’t get fast paced through only paper prototyping. So, it was important to switch to an engine that I was comfortable in - which was Unity for me.",
          "I wanted to bring more focus towards the players being able to think critically about their decisions and where they move. I thought about adding some constraints for the player",
        ],
      },

      { type: "heading", text: "Design notes" },
      {
        type: "paragraph",
        text: "I designed the cloning mechanic to be easy to learn but offer depth in planning and timing. Focusing on the game feel was important for this project since it needed a lot of running around.",
      },
    ],
    technologies: ["Unity", "Miro"],
    // image: "/assets/games-pictures/shoppers_havoc.png",
    image: shoppershavocPhoto,
    thumbnail: shoppershavocThumbnail,
    status: "Independent",
    teamSize: "Individual",
    demoLink: "#",
    githubLink: "#",
    playLink: "https://teragatchi.itch.io/shoppers-havoc",
    media: [
      //{ type: 'youtube', src: 'https://www.youtube.com/watch?v=CuZikGbWAc8', title: 'Shopper\'s Havoc trailer (https://www.youtube.com/watch?v=CuZikGbWAc8)' }
    ],
  },
];

export default projects;
