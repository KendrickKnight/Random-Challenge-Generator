const level = document.getElementById("level");
const challengeType = document.getElementById("challenge-types");
const output = document.getElementById("challenge-output");

const skillList = [
  // Quantity
  [
    "Pushups",
    "Pullups",
    "Curlups",
    "Squats",
    "Dumbels",
    "Barbells",
    "Read",
    "Gratitude",
  ],

  // Time
  [
    "journal",
    "Meditation",
    "Run",
    "fashion research",
    "stoicism research",
    "skincare research",
  ],
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generate() {
  // ALL
  if (challengeType.value.toLowerCase() === "all") {
    randomtype = skillList[getRandomInt(skillList.length)];
    randomPrompt = randomtype[getRandomInt(randomtype.length)];

    amount = getRandomArbitrary(level.value / 2, level.value * 2);

    output.textContent = `do ${amount} of ${randomPrompt}`;
  }
  //Time
  else if (challengeType.value.toLowerCase() === "time") {
    randomtype = skillList[1];
    randomPrompt = randomtype[getRandomInt(randomtype.length)];

    amount = getRandomArbitrary(level.value / 2, level.value * 2);

    output.textContent = `do ${amount} of ${randomPrompt}`;
  }
  //Quantity
  else {
    randomtype = skillList[0];
    randomPrompt = randomtype[getRandomInt(randomtype.length)];

    amount = getRandomArbitrary(level.value / 2, level.value * 2);

    output.textContent = `do ${amount} of ${randomPrompt}`;
  }

  // output.innerHTML = `${challengeType.value}`
}
