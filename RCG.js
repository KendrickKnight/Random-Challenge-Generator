const level = document.getElementById("level");
const challengeType = document.getElementById("challenge-types");
const output = document.getElementById("challenge-output");

for (const prop in promptList) {
  const element = document.createElement("option");
  element.textContent = prop;
  element.setAttribute("value", prop);
  challengeType.appendChild(element);
}

// function getRandomInt(max) {}

function getRandomArbitrary(min, max) {
  if (min === null) {
    return Math.floor(Math.random() * max);
  } else {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

// TODO Actually use the formula you dimwit! xD

function generate() {
  if (challengeType.value.toLowerCase() === "all") {
    const chosenSkill = skillList[getRandomArbitrary(skillList.length, null)];
    const amount = getRandomArbitrary(level.value * 0.75, level.value * 1.25);

    output.textContent = `${chosenSkill.promptType.starter} ${amount} ${chosenSkill.promptType.unit} of ${chosenSkill.name}`;
  }
}

function generate1() {
  // ALL
  if (challengeType.value.toLowerCase() === "all") {
    randomtype = skillLists[getRandomInt(skillLists.length)];
    randomPrompt = randomtype[getRandomInt(randomtype.length)];

    amount = getRandomArbitrary(level.value / 2, level.value * 2);

    output.textContent = `do ${amount} of ${randomPrompt}`;
  }
  //Time
  else if (challengeType.value.toLowerCase() === "time") {
    randomtype = skillLists[1];
    randomPrompt = randomtype[getRandomInt(randomtype.length)];

    amount = getRandomArbitrary(level.value / 2, level.value * 2);

    output.textContent = `do ${amount} of ${randomPrompt}`;
  }
  //Quantity
  else {
    randomtype = skillLists[0];
    randomPrompt = randomtype[getRandomInt(randomtype.length)];

    amount = getRandomArbitrary(level.value / 2, level.value * 2);

    output.textContent = `do ${amount} of ${randomPrompt}`;
  }

  // output.innerHTML = `${challengeType.value}`
}
