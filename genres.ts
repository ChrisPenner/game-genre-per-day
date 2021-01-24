// https://gist.github.com/bananu7/9252503
const genres = [
'action-RPG',
'adventure',
'arcade',
'artillery',
'battle-royale',
'beat\'em up',
'bullet-hell',
'casual',
'chess-like',
'collectathon',
'cookie-clicker',
'cooking',
'crafting',
'dating-sim',
'deck-building',
'dungeon-crawling',
'escape-room',
'farming',
'fighting',
'fishing',
'god-game',
'horror',
'idling',
'logistics',
'loot-grinding',
'match-3',
'Metroidvania',
'MMO',
'MOBA',
'monster-taming',
'mystery',
'party',
'physics-simulator',
'pinball',
'platforming',
'point-and-click',
'programmable',
'puzzle',
'racing',
'rogue-like',
'RPG',
'shoot\'em-up',
'simulation',
'sokoban block-pushing',
'solitaire-like',
'soulslike',
'sports',
'stealth',
'strategy',
'survival',
'tactics',
'tetris-like',
'text-adventure',
'tower-defense',
'typing-tutor',
'vehicle-building',
'walking-simulator',
]
const modifiers = [
'with conservation of mass and energy',
'with a morality engine',
'with strict time limits',
'where you\'re stuck in a loop',
'with time travel',
'with social mechanics',
'with strange controls',
'with single-button controls',
'with low resolution',
'that\'s educational',
'with fitness mechanics',
'in first-person',
'which breaks the fourth-wall',
'on a grid',
'but in reverse',
'with lots of mini-games',
'with rhythm mechanics',
'with an open-world',
'with audio as a core component',
'which manipulates perspective',
'with procedural-generation',
'in real-time',
'that\'s turn-based',
'that\'s upgrade-centric',
'where you play the villain',
'with asymmetric multiplayer',
'with weather simulation',
'with a real-world clock',
'where time doesn\'t stop',
'with insane amounts of customization',
'that never ends',
'where losing is only the beginning',
'where where nobody gets hurt',
'with a focus on minimalism',
'where you are your own enemy',
'where things grow from zero to ridiculous',
'where all systems interact with each other',
'but with particle physics',
'with parallel dimensions',
'where you control multiple characters',
'with very limited resources or moves',
'but with strange power-ups',
'where gameplay involves sacrifice',
'with indirect controls',
'where everything is too small',
'where you can manipulate the rules',
'where you have to cheat',
'where you are unstoppable',
'but with cats',
'with a focus on maintaining momentum',
'with Massively Single-player Online',
'where you have to lose to win',
]

// https://letsmakeagame.net/game-jam-theme-generator/
// const themes = [
// 'dystopian',
// 'fantasy',
// 'space',
// 'pirate',
// 'heist',
// 'hacker',
// 'cyberpunk',
// 'steampunk',
// 'ancient',
// 'neanderthal',
// 'virtual reality',
// 'fortress',
// ]

export function generate(): string {
  const genre1 = choiceFrom(genres);
  var genre2 = choiceFrom(genres);
  while (genre2 === genre1) {
    genre2 = choiceFrom(genres);
  }
  const modifier = choiceFrom(modifiers);
  const article = 'aeiou'.indexOf(genre1[0]) >= 0 ? 'An' : 'A'
  // const theme = choiceFrom(themes);
  return `${article} ${genre1} ${genre2} game ${modifier}.`
}

function choiceFrom<T>(values : T[]): T {
  return values[Math.floor(Math.random()*values.length)];
}

// for (let i = 0; i < 100; i++) {
//   console.log(generate());
// }

