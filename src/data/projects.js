// Editable project data. Update `longDescription` to change what appears in the expanded "read more" area.
// longDescription is an array of content blocks. Supported block types:
// - { type: 'heading', text: '...' }
// - { type: 'paragraph', text: '...' }
// - { type: 'list', items: ['item1', 'item2'] }

import sombrecoverPhoto from '../assets/games-pictures/concept_art_first_lvl.png';
import shoppershavocPhoto from '../assets/games-pictures/shoppers_havoc.png';
import budsOasisPhoto from '../assets/games-pictures/buds_oasis.jpeg';

//web of lies assets
import webOfLies from '../assets/games-pictures/web_of_lies_cover.png';
import webOfLiesDemo from '../assets/games-pictures/wol_demo_questions.jpg';
import webOfLiesScreenshot from '../assets/games-pictures/web_of_lies_sc2.png';
import wol_win_lose_bg from '../assets/games-pictures/web_of_lies_endings/win_lose_ending_bg.png';
import wol_lose_win_bg from '../assets/games-pictures/web_of_lies_endings/lose_win_ending_bg.png';
import wol_lose_lose_bg from '../assets/games-pictures/web_of_lies_endings/lose_lose_ending_bg.png';
import wol_win_win_bg from '../assets/games-pictures/web_of_lies_endings/win_win_ending_bg.png';

import sompbreCoreMechGif from '../assets/games-pictures/sombre-prototype/core_mechanic_sombre.gif';
import sombreTeleportGif from '../assets/games-pictures/sombre-prototype/teleportation_mechanic.gif';
import sombreProgressGif from '../assets/games-pictures/sombre-prototype/shadow_game_progress.gif'

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
    technologies: ["Blender", "Unity"],
    status: "Community Award Winner",
    // image: "/assets/games-pictures/buds_oasis.jpeg",
    image: budsOasisPhoto,
    demoLink: "#",
    githubLink: "#",
    playLink: "https://mms5004.itch.io/i-scream-metal",
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
      { type: 'heading', text: "Overview" },
      { type: 'paragraph', text: 'In this story-based puzzle platformer - You are a scared kid who has woken up in an unknown environment with no memories, you don\’t see anyone around you and feel lost and lonely. Your main goal is to figure out what is going on in this estranged world. As you progress, you find that you have the ability to spawn platforms out of your own shadows.' },
      {type: 'paragraph', text: "a very early prototype of shadow manipulation mechanic -"},
      {type: 'gif', src: sompbreCoreMechGif, alt: 'Core mechanic demo'},

      { type: 'heading', text: "Design Pillars" },
{type: 'paragraph', text: ""}, // blank space to separate
      { type: 'list', items: ["Discovery Within Narrative"] },
      { type: 'paragraph', text: "Players discover story through narrative and visual storytelling, it is up to the player to interpret it the way they want to." },
      { type: 'list', items: ["Ability driven Problem solving"]},
      {type: 'paragraph', text: "Each puzzle has an ideal solution, giving more control on how to make the experience for players more in tune with how we would want them to feel."},
      { type: 'list', items: ["Low Difficulty Progression"]},
      {type: 'paragraph', text: "The puzzles progressively get more difficult after each stage has been passed and a new ability is introdiced"},

      {type: 'heading', text: "Story" },
      {type: 'paragraph', text: "Sombre takes you on a journey through the <strong>stages of grief</strong>. for the time limit on group projects, we are only able to do 2 of these stages, however I will talk about the core idea of this particular element. "},
      {type: 'paragraph', text: "there would consist of 5 stages, denial, anger, depression, bargaining and finally acceptance. For each of these stages you will <strong>meet an NPC</strong> who has been stuck in the stage for quite a while. As you get to know them throughout the stage, you <strong>find out</strong> more of their <strong>backstory</strong>. As you do this, you’ll eventually have to help them move on from the stage they had been stuck in. And in turn they help you move on as well into the next stage of grief. "},
      {type: 'paragraph', text: "It is important to note that not every person experiences grief the same way. For most people, it’s going through all the five stages in order and for others it may only be three or they may be stuck in one consistently. "},
      {type: 'paragraph', text: "Throughout the game, you will notice environmental hints and clues as to who you are and how you ended up here. Though the story is that you’re a very young kid of around 8-12 years of age and had died in the process of finding your mother who had abandoned you. You wake up in the in between with these powers which help you go through the stages."},
      
      { type: 'heading', text: "GamePlay" },
      {type: 'paragraph', text: " "}, // blank space to separate
      { type: 'list', items: ["Goal"] },
      {type: 'paragraph', text: "The initial narrative goal of our character is to find their mother. However when the player takes control of our character, it becomes more into discovery. Where am I? and what has happened? the goal for the player then becomes to explore the narrative and to find the end to the game."},
      {type: 'list', items: ["Challange"]},
      {type: 'paragraph', text: "The main challange for the player is to go through the levels by using their new found ability - shadows. It is important to note that in different colored lights, the shadows also have different abilities. such as teleportation in blue light. as shown below."},
      {type: 'gif', src: sombreTeleportGif, alt: 'Teleportation mechanic'},
      {type: 'paragraph', text: "The player will also be constricted by the number of shadows they have in each area. Some areas the player may only be able to place one shadow and maybe in others, more. It would depend on how the puzzle is layed out."},
      { type: 'heading', text: "Mechanics" },
      {type: 'list', items: ["Place shadow"]},
      {type: 'paragraph', text: "The essence of the game is the fact that the player can place a physical version of their shadow. These physical shadows can be used to walk on as if it were solid ground. They can be activated by pressing the ability activation button, and have an ability based on the colour of the light. These abilities are the moving shadows, teleport shadow and bomb shadow, which are further discussed below. The player can place these shadows on designated areas, these could be floors, walls, and ceilings."},
      {type: 'list', items: ["Moving Shadow"]},
      {type: 'paragraph', text: "This is the most basic shadow. Once placed, the player can press the activation key for them to move towards it's normal. The shadow moves for the duration that the player is holding the button"},
      {type: 'paragraph', text: "The platform has the ability to push or carry specific objects as well. including the player."},
      {type: 'list', items: ["Teleport Shadow"]},
      {type: 'paragraph', text: "The teleport shadow allows the player to move from one shadow to the other when two of them are placed down and the shadow has been activated while the player is directly standing on top of it. The shadow has a blue hue and can only be placed in a blue light source."},
      {type: 'list', items: ["Bomb Shadow"]},
      {type: 'paragraph', text: "In the stage of anger, the bomb shadow is introduced.  This shadow has a red hue, and can only be placed in red lights. When activated the shadow forms a mass that slams into the surface that it is placed on. This can be used in different ways, one of them is a way to break fragile walls or items. Another way could be placing it on the ground and moving a platform over it, this would launch the platform upwards."},
      
      { type: 'heading', text: "Progress" },
      { type: 'paragraph', text: "Below is a short GIF demo of the progress of this game" },
      { type: 'gif', src: sombreProgressGif, alt: 'Core mechanic demo' },

    ],
    technologies: ["Unity", "Miro", "HacknPlan"],
    status: "In Development",
    // image: "/assets/games-pictures/concept_art_first_lvl.png",
    image: sombrecoverPhoto,
    demoLink: "#",
    githubLink: "#",
    playLink: "#",
    media: [
      // { type: 'gif', src: sombreProgressGif, alt: 'Core mechanic demo' },
    ]
  },
    {
    id: 3,
    title: "WEB OF LIES",
    role: "role: GAMEPLAY DESIGNER",
    genre: "Narrative - local Co-op",
    description: "This was a 2 day game jam game. The theme given was spread it and we won #2 in the most unique idea out of 30 other games.",
    longDescription: [
      { type: 'heading', text: "context" },
      { type: 'paragraph', text: "This game was made in two days for a game jam whose theme was -spread it- and we had chosen to spread lies. I worked on the core design along with writing dialogues with another design in the project" },
      { type: 'heading', text: "Overview" },
      { type: 'paragraph', text: "Can you get yourself and your partner out of your web of lies? You and a friend of your choice will play as <strong>2 suspects</strong> in a mysterious <strong>murder case</strong>. You both dont know how you got there. But whatever it may be, the detective wants answers now! You both need to come up with <strong>alibies</strong> and <strong>stick to it</strong>. You will also need to <strong>remember</strong> what the other person had said as their alibies to <strong>match them</strong>" },
      { type: 'paragraph', text: "This game tests your memories and trust. Will you be able to <strong>stay consistent</strong> with the web that you've created together? The core gameplay involves answering the questions that the detective throws at you through 4 options given at the bottom of your screen such as shown here"},
      { type: 'image-row', items: [
        { src: webOfLiesDemo, alt: 'WOL question picture' },
        { src: webOfLiesScreenshot, alt: 'WOL screenshot' }
      ] },
      
      { type: 'heading', text: "Core Design"},
      { type: 'paragraph', text: "This game takes place in two phases - the story building phase and the answering phase."},
      { type: 'list', items: ["Phase one - Story building phase"]},
      { type: 'paragraph', text: "The questioning phase involves questioning to each person about 4 things in relation to the victim - What job they do, What thier relationship was with the victim, their location and what they were doing at the time of the murder. Once each player gives their answers, they will also have to remember the other's answers and this phase will be over then, starting the answering phase"},
      { type: 'list', items: ["Phase two - Answering Phase"] },
      { type: 'paragraph', text: "In the answering phase, the detective now knows your story. And will try their best to poke holes in it. The moment they catch either of you straying off your alibis, his <strong>suspection meter</strong> will increase. The questions for this phase can vary. There will be moments where players are able to betray the other by telling them that they would be spared at the expence of the other"},
      
      {type: 'heading', text: "Questions design choices"},
      {type: 'paragraph', text: "- Sometimes the players get asked yes or no questions about what they had answered previously. i.e. If player had said they were in the living room at the time of the murder, detective would ask where they were and based on if their answer was wrong or right he would give them a lighthearted comment. The overall tone for the detective is heavy but he has a strong character."},
      {type: 'paragraph', text: "- We have also designed some questions where the detective asks a player questions about the other player to see how much attention they were paying to them and could match what they were saying. Getting these wrong would raise the suspision on the both of you and not just you alone."},
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
    playLink: 'https://razvanluca.itch.io/web-of-lies-spreading-misinformation'
  },
  {
    id: 4,
    title: "SHOPPER'S HAVOC",
    role: "role: INDEPENDENT",
    genre: "Strategy / Humour",
    description: "A humorous strategy game about navigating hectic sales with a cloning mechanic.",
    longDescription: [
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
         
      { type: 'heading', text: "Design notes" },
      { type: 'paragraph', text: "I designed the cloning mechanic to be easy to learn but offer depth in planning and timing." }
    ],
    technologies: ["Unity", "Miro"],
    // image: "/assets/games-pictures/shoppers_havoc.png",
    image: shoppershavocPhoto,
    demoLink: "#",
    githubLink: "#",
    playLink: "https://teragatchi.itch.io/shoppers-havoc",
    media: [
        { type: 'youtube', src: 'https://www.youtube.com/watch?v=CuZikGbWAc8', title: 'Shopper\'s Havoc trailer (https://www.youtube.com/watch?v=CuZikGbWAc8)' }
    ]
  },

];

export default projects;
