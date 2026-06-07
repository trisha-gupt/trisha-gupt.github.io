// Editable project data. Update `longDescription` to change what appears in the expanded "read more" area.
// longDescription is an array of content blocks. Supported block types:
// - { type: 'heading', text: '...' }
// - { type: 'paragraph', text: '...' }
// - { type: 'list', items: ['item1', 'item2'] }

import sombrecoverPhoto from '../assets/games-pictures/concept_art_first_lvl.png';
import shoppershavocPhoto from '../assets/games-pictures/shoppers_havoc.png';
import budsOasisPhoto from '../assets/games-pictures/buds_oasis.jpeg';

// GIF thumbnail assets
import budsOasisThumbnail from '../assets/games-pictures/buds-oasis/buds-oasis-thumbnail.gif';
import sombreThumbnailGif from '../assets/games-pictures/sombre-prototype/sombre-gif-thumbnail.gif';
import shoppershavocThumbnail from '../assets/games-pictures/shoppers-havoc/shoppers-havoc-thumbnail.gif';

//web of lies assets
import webOfLies from '../assets/games-pictures/web_of_lies_cover.png';
import webOfLiesDemo from '../assets/games-pictures/wol_demo_questions.jpg';
import webOfLiesScreenshot from '../assets/games-pictures/web_of_lies_sc2.png';
import wol_win_lose_bg from '../assets/games-pictures/web_of_lies_endings/win_lose_ending_bg.png';
import wol_lose_win_bg from '../assets/games-pictures/web_of_lies_endings/lose_win_ending_bg.png';
import wol_lose_lose_bg from '../assets/games-pictures/web_of_lies_endings/lose_lose_ending_bg.png';
import wol_win_win_bg from '../assets/games-pictures/web_of_lies_endings/win_win_ending_bg.png';

// sombre assets
import sombreCoreMechGif from '../assets/games-pictures/sombre-prototype/core_mechanic_sombre.gif';
import sombreTeleportGif from '../assets/games-pictures/sombre-prototype/teleportation_mechanic.gif';
import sombreProgressGif from '../assets/games-pictures/sombre-prototype/shadow_game_progress.gif'
import sombreTrailer from '../assets/games-pictures/sombre-prototype/sombre-trailer.mp4';

// shopper's havoc assets
import shoppershavocGameplayLoop from '../assets/games-pictures/shoppers-havoc/shoppers-havoc-gameplay-loop.png';
import shoppershavocPOC from '../assets/games-pictures/shoppers-havoc/shoppers-havoc-poc.png';


const projects = [
  {
    id: 1,
    title: "BUD'S OASIS",
    role: "role: DESIGNER / ARTIST",
    genre: "CO-OP COUCH GAME",
    description: "Developed during the Franco-Belge Game Jam, this project earned the Community Award and was later livestreamed on Twitch.",
    longDescription: [
      { type: 'heading', text: "Trailer-" },
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=aVt7UzyGD0I', title: 'BUD\'S OASIS trailer (https://www.youtube.com/watch?v=aVt7UzyGD0I)' },
      { type: 'heading', text: "Project Overview" },
      { type: 'list', items: ["Bud’s oasis was a game Jam that was created within a 48-hour Franco-Belge game jam with people from 4 different schools who were put together on random. The theme of the game jam was sustainability and we had a brainstorming session about a couch co - op game.",
        "This project won the community award as the game which was the most fun to play."
      ]},
/*       { type: 'paragraph', text: "BUD'S OASIS is a friendly competitive/cooperative couch game created during a 48-hour game jam with people from 4 different schools who were put together. You also have the option to play this solo but it's always recommended to play with friends, it's simply much more fun that way. " },
      {type: 'paragraph', text: "You (and your friends) are in charge of maintaining the last remaining life form on earth. You have to fend off the evil robots that are out there to destroy the tree by picking up the flowers that grow around it and throwing them. Once you've collected enough flowers you will be able to plant a seed with it which will make more flowers of the same color grow around the area, but be careful! This also increased the spawn rate of the enemies."}, */
      {type: 'paragraph', text: "a short gameplay of it that was livestreamed -"},
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=3MENThg9acM&t=1s', title: 'BUD\'S OASIS livestream (https://www.youtube.com/watch?v=3MENThg9acM&t=1s)' },
      
      { type: 'heading', text: "My responsibilities" },
      { type: 'list', items: ["I was responsible for the main 3d assets in the game such as the character and the flowers.",
        "I had implemented the sound and created videos for the trailer of the game.",
        "Game Design - bridging the gap between programming and art."
       ]},

/*       {type: 'heading', text: "Gameplay Mechanics"},
      {type: 'list', items: ["Colors of flowers"]},
      {type: 'paragraph', text: "Each color of flower has its own powers. There are 4 colors that the flowers have - red, blue, yellow and white. White being the most common one since it has a small impact which lets you kill the robots. When you plant a seed of a particular color, you'll start to see more flowers of the same color spawn"},

      {type: 'list', items: ["White flowers"]},
      {type: 'paragraph', text: "White flowers are the ones you are encountered with first. You need to grab these flowers and throw them at the robots which give them damage"},
      {type: 'list', items: ["Blue flowers"]},
      {type: 'paragraph', text: "Blue flowers slow the enemies down so they stay in the same area for a longer time. The blue flowers are related to the water element"},
      {type: 'list', items: ["Red flowers"]},
      {type: 'paragraph', text: "Red Flowers one shot the enemies. they are related to the fire element"},
      {type: 'list', items: ["Yellow flowers"]},
      {type: 'paragraph', text: "Yellow flowers allow you to <strong>stun</strong> your enemies. Once you throw it at the robots, they will be immobalised for a second"},

       */
      { type: 'heading', text: "Challenges in Design -" },
      { type: 'list', items: [" The theme of this game jam was sustainability. We moved more towards the protection of the environment from the evil robots but also making it a fun experience by having two or more people be able to play together.",
        "There were quite a few things missing from the game due to time constraints. The feedback received was that there was not enough player feedback for when the tree was hit or who your character was. Going back, I would have added visual clarity for these mechanics - it would have made it so that the players had an easier time getting used to the game.",
        "Another challenging aspect of this game was balancing the level in such a way that it isn’t too easily winnable and also wasn't too frustrating to beat."
      ]
      }
/*       { type: 'paragraph', text: "- The theme of this game jam was sustainability. We moved more towards the protection of the environment from the evil robots but also making it a fun experience by having two or more people be able to play together." },
      {type: 'paragraph', text: "- One challenging aspect of this was balancing the level so it wasn't too easily winnable and also wasn't too frustrating to beat."},
      {type: 'paragraph', text: "- Due to time constraints we weren't able to have a health bar for the tree. But it would have been a good addition for players to have visual feedback for tree health."}, */
    ],
    technologies: ["Blender", "Unity"],
    status: "Community Award Winner",
    // image: "/assets/games-pictures/buds_oasis.jpeg",
    image: budsOasisPhoto,
    thumbnail: budsOasisThumbnail,
    demoLink: "#",
    githubLink: "#",
    playLink: "https://mms5004.itch.io/i-scream-metal",
    media: [
      { type: 'youtube', src: 'https://www.youtube.com/watch?v=aVt7UzyGD0I', title: 'BUD\'S OASIS trailer (https://www.youtube.com/watch?v=aVt7UzyGD0I)' },
    ]
  },
  {
    id: 2,
    title: "SOMBRE",
    role: "role: DESIGNER / PROJECT MANAGER",
    genre: "STORY - PUZZLE PLATFORMER",
    description: "A story-driven puzzle-platformer exploring somber themes with a unique core mechanic.",
    longDescription: [
      {type: 'heading', text: "Project Overview" },
     // { type: 'paragraph', text: 'A Personal project that turned into a semester long group project. This is a project that I had a unique interest in because of the gameplay mechanics after I had prototyped a couple quick iteration of the mechanics in unity, I knew I wanted to take it towards A narrative driven theme with some platforming gameplay. ' },
      {type: 'paragraph', text: "Sombre is a Story-Based puzzle platformer which required a lot of iterations with level designing the puzzles and platforming sections. During the production of this, I was able to learn a lot of things."}, 
      {type: 'paragraph', text: "The narrative of this game was the part that drew people in. And I really wanted to focus on player’s emotions and how to make this an experience they would not forget while also keeping the challenges they face just frustrating enough to keep engagement and not abandon the game." },
      

      { type: 'heading', text: "My responsibilities for this project" },
      { type: 'list', items: ["I had been working on a few gameplay mechanics, a couple being the lever system and implementing the different types of shadows.",
        "Implementing different types of shadows (Teleportation, lift and explosion types) Only teleportation and lift were able to get into the game because of time constraints.",
        "Level Design and final layout of the first and second level (second level was not able to be in the game).",
        "Playtesting and iterating on the level design while gauging how the players react to certain elements of the mechanic and writing down changes required for a particular area of the puzzle.",
        "I had programmed a prototype of different shadow types and the base shadow mechanic for the project"
      ] },
      {type: 'paragraph', text: "very early prototypes of shadow manipulation mechanic -"},
      {type: 'gif', src: [sombreCoreMechGif, sombreTeleportGif], alt: 'Core mechanic demo'},
      
      { type: 'paragraph', text: "" }, // blank space to separate
      
      
      { type: 'heading', text: "Where it had succeeded" },
      { type: 'list', items: ["This project was able to grab the attention of the audience that I had initially wanted to grab the attention of, and the reactions to the puzzles and stories were satisfying to read as a game designer.",
        "I feel like this project eventually became a huge learning experience for me as a game designer trying to chip in wherever I could as a generalist for the project, in turn making myself much better with my general skills.", 
        "This project was filled with technical difficulties and setbacks due to the shadow system being so challenging and time consuming to figure out. Due to this, I was able to learn how time constraints can effect a team in playtesting and iterating on certain parts of the game."] },
      { type: 'paragraph', text: "" }, // blank space to separate

      { type: 'heading', text: "Challenges I faced on the project as a Designer" },
      { type: 'list', items: ["One of the most challenging parts of this project as a designer was the fact that while designing puzzles, you never know how people are going to approach it. Everyone has their own way of approaching a problem to solve.",
        "I’ve also learnt the amount of playtesting needed for a puzzle platformer has to be at a much larger scale since you need to try to adhere to a good balance of people who are great at solving problems and people who take longer. I’ve also had to make sure that the level of difficulty stayed somewhat similar throughout the different types of audience."
      ] },
      { type: 'paragraph', text: "" }, // blank space to separate

/*       { type: 'heading', text: "Design Pillars" },
      {type: 'paragraph', text: ""}, // blank space to separate
      { type: 'list', items: ["Discovery Within Narrative"] },
      { type: 'paragraph', text: "Players discover story through narrative and visual storytelling, it is up to the player to interpret it the way they want to." },
      { type: 'list', items: ["Ability-driven Problem solving"]},
      {type: 'paragraph', text: "Each puzzle has an ideal solution, giving more control on how to make the experience for players more in tune with how we would want them to feel."},
      { type: 'list', items: ["Low Difficulty Progression"]},
      {type: 'paragraph', text: "The puzzles progressively get more difficult after each stage has been passed and a new ability is introduced"},
 */
      {type: 'heading', text: "Narrative" },
      {type: 'paragraph', text: "Sombre takes you on a journey through the <strong>stages of grief</strong>. For the time limit on group projects, we are only able to do 2 of these stages, however I will talk about the core idea of this particular element. "},
      {type: 'paragraph', text: "There would consist of 5 stages, denial, anger, depression, bargaining and finally acceptance. For each of these stages you will <strong>meet an NPC</strong> who has been stuck in the stage for quite a while. As you get to know them throughout the stage, you <strong>find out</strong> more of their <strong>backstory</strong>. As you do this, you’ll eventually have to help them move on from the stage they had been stuck in. And in turn they help you move on as well into the next stage of grief. "},
      {type: 'paragraph', text: "It is important to note that not every person experiences grief the same way. For most people, it’s going through all the five stages in order and for others it may only be three or they may be stuck in one consistently. "},
      {type: 'paragraph', text: "Throughout the game, you will notice environmental hints and clues as to who you are and how you ended up here. Though the story is that you’re a very young kid of around 8-12 years of age and had died in the process of finding your mother who had abandoned you. You wake up in the -in between- with these powers which help you go through the stages."},
      {type: 'paragraph', text: ""}, // blank space to separate

      { type: 'heading', text: "Progress" },
      { type: 'paragraph', text: "Below is a short GIF demo of the progress of this game" },
      { type: 'gif', src: sombreProgressGif, alt: 'Core mechanic demo' },

    ],
    technologies: ["Unity", "Miro", "HacknPlan"],
    status: "In development",
    // image: "/assets/games-pictures/concept_art_first_lvl.png",
    image: sombrecoverPhoto,
    thumbnail: sombreThumbnailGif,
    demoLink: "#",
    githubLink: "#",
    playLink: "#",
    media: [
      { type: 'video', src: sombreTrailer, alt: 'SOMBRE trailer' },
    ]
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
    id: 3,
    title: "SHOPPER'S HAVOC",
    role: "role: INDEPENDENT",
    genre: "Strategy / Humour",
    description: "A humorous strategy game about navigating hectic sales with a cloning mechanic.",
    longDescription: [
/*       { type: 'heading', text: "Overview :-" },
      { type: 'paragraph', text: "This was a school project created in one week including brainstorming and paper prototyping. I wanted to focus on game feel and core concept to make it stand out and give an edge." },


      { type: 'heading', text: "Core Objectives :-" },
      {type: 'paragraph', text: ""}, // blank space to separate
      { type: 'list', items: ["Complete the List -"] },
      { type: 'paragraph', text: "You need to find and collect every Item on the list to be able to move on to the next level" },
      { type: 'list', items: ["Escape the store -"] },
      { type: 'paragraph', text: "Once all the items are collected, you need to get out of there as soon as you can without having any of your items stolen by any of the shoppers" },
      { type: 'list', items: ["Outsmart the rival shoppers -"] },
      { type: 'paragraph', text: "You will need to maneuver the rival shoppers and strategize the best course of action for you to be able to escape without anything being stolen. (e.g. you will be able to grab their attention and distract one of them while your clone goes and steals from the area, etc.) " },
      { type: 'list', items: ["Uncover character's story -"] },
      { type: 'paragraph', text: "Based on the items that you collect, you'll learn a piece of new information about the player which will be filled in a diary. The diary is also the same book where your shopping list is in the menu, you will open new chapters the more items you collect - and also get a short description of what the story is through dialogue, if you're not much of a reader." },

      { type: 'heading', text: "Types Of Shoppers"},
      { type: 'paragraph', text: "I wanted to create shoppers with different abilities. There are 4 types of shoppers in this game -"},
      {type : 'list', items: ["Sneaky Teen"]},
      {type : 'paragraph', text: "These teens are very sneaky, you will maybe get a glimpse of them in the store you are walking in but they only strike when you are busy (for example when you are collecting an item) you need to hold down a button for 2 seconds. You will see them slowly sneak in and if you don't move away they will steal one item from your list."},
      {type : 'list', items: ["Karen"]},
      {type : 'paragraph', text: "These shoppers are more of a nuisance than pose an actual threat to your items. You will be able to hear a Karen as soon as you enter the store. If you get in the radius of one, you will be stuck with them right next to you and be forced to hear their noise. "},
      {type: 'paragraph', text: "You are able to shift these Karens to another customer by interacting with the customer you want to shift them to for 3 seconds (beware of the sneaky teen)"},
      {type : 'list', items: ["Tired Dad"]},
      {type : 'paragraph', text: "He really doesn't do much but walk around pretty slowly trying to get some items. He quite a big man though, so he blocks certain pathways for you to pass through and you are forced to take another route or switch to a clone if you placed any."},
      {type : 'list', items: ["Evil Shopper"]},
      {type : 'paragraph', text: "These are the shoppers who will hunt you down if they see you have any items. They have a detection radius of 5 units. If you are within this radius and have items with you, they will start dashing towards you and try to steal all of them one by one. Once you are out of this radius, they will go back to shopping."}, 
          */

      {type: 'heading', text: "Project Overview"},
      {type: 'list', items: ["This was an Independent project for a game design class where I was responsible for everything in the game including programming, design and art. I had worked on this project for one week including the time spent for brainstorming and iterations. ",
        "I used the paper prototyping method for this. I find it to be a lot faster and iterations on a paper prototype take about 3 minutes as compared to a potential 10 minutes for an engine prototype.",
        "This was a project that was more focused on a mechanics first approach with some humorous content added through the story and characters. I chose to first focus on the mechanics being fun to play through paper prototyping and then moved on to the game also having rich characters with personalities that would bring a fun experience to the players."
      ]},
      {type:'image', src: shoppershavocGameplayLoop, alt: 'Shopper\'s Havoc gameplay loop'},
      {type: 'paragraph', text: ""}, // blank space to separate

      {type: 'heading', text: "Iterations "},
      {type: 'list', items: ["This project had initially started as a turn based game which went through multiple iterations throughout the paper prototyping and later, Unity prototyping as well to make sure that the paper prototype has been translated well within the engine.",
        "Below is a screenshot of the Proof of concept for this game. I had tested it out through paper prototyping and came to the conclusiton to make it in Unity and get more player feedback"
      ]},
      {type: 'image', src: shoppershavocPOC, alt: 'Shopper\'s Havoc early prototype'},
      {type: 'paragraph', text: ""}, // blank space to separate
      {type: 'list', items: ["It is important to know what kind of a game would require a paper prototype and when you should switch to an engine to get the player experience you want. For this project, even though it had started as a paper prototype, I couldn’t quite get the player experience right. It was a fast paced game and you can’t get fast paced through only paper prototyping. So, it was important to switch to an engine that I was comfortable in - which was Unity for me.",
        "I wanted to bring more focus towards the players being able to think critically about their decisions and where they move. I thought about adding some constraints for the player",
      ]},

      { type: 'heading', text: "Design notes" },
      { type: 'paragraph', text: "I designed the cloning mechanic to be easy to learn but offer depth in planning and timing. Focusing on the game feel was important for this project since it needed a lot of running around." }
    ],
    technologies: ["Unity", "Miro"],
    // image: "/assets/games-pictures/shoppers_havoc.png",
    image: shoppershavocPhoto,
    thumbnail: shoppershavocThumbnail,
    demoLink: "#",
    githubLink: "#",
    playLink: "https://teragatchi.itch.io/shoppers-havoc",
    media: [
        { type: 'youtube', src: 'https://www.youtube.com/watch?v=CuZikGbWAc8', title: 'Shopper\'s Havoc trailer (https://www.youtube.com/watch?v=CuZikGbWAc8)' }
    ]
  },

];

export default projects;
