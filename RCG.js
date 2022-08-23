const level = document.getElementById("level");
const challengeType = document.getElementById("challenge-types");
const output = document.getElementById("challenge-output");

for (const prop in promptList) {
  const element = document.createElement("option");
  element.textContent = prop;
  element.setAttribute("value", prop);
  challengeType.appendChild(element);
}

function getRandomArbitrary(min, max) {
  if (min === null) {
    return Math.floor(Math.random() * max);
  } else {
    return Math.floor(Math.random() * (max - min) + min);
  }
}

/* TODO Proper Generate function
* 1- Formula usage
* 2- Proper Sentence generation
* 3- Turning these into TS
* 4- Importing it to the app (after fixing and making the page in app)
*/

function generate() {
  if (challengeType.value.toLowerCase() === "all") {
    const chosenSkill = skillList[getRandomArbitrary(skillList.length, null)];
    const amount = getRandomArbitrary(level.value * 0.75, level.value * 1.25);

    output.textContent = `${chosenSkill.promptType.starter} ${amount} ${chosenSkill.promptType.unit} of ${chosenSkill.name}`;
  }
}

