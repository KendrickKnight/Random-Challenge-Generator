const promptList = {
  // UNIT: how we quantify that challenge
  // STARTER: how the sentence of the challenge starts
  reading: {
    name: "reading",
    unit: "Paragraphs",
    unitSet: "Pages",
    starter: "Read",
  },
  writing: {
    name: "writing",
    unit: "Paragraphs",
    unitSet: "Pages",
    starter: "Write",
  },
  exercising: {
    name: "exercising",
    unit: "Reps",
    unitSet: "Sets",
    starter: "Do",
  },
  distance: {
    name: "distance",
    unit: "km",
    unitSet: "Miles",
    starter: "hmmm",
  },
  time: {
    name: "time",
    unit: "Minutes",
    unitSet: "Hours",
    starter: "hmmm",
  },
};

const Example_Skill_object = {
  id: 123123,
  name: "Push-ups",
  //PROMPT_TYPE: the units and setUnits for measurment of this skill. more info in the propmpt list above
  promptType: promptList.exercising,
  //UNIT-MAX & UNIT-SET-MAX: the maximum amount of sets and reps a challenge can put in before moving onto the next progression
  unitMax: 30,
  unitSetMax: 3,
  // FORMULA: the ratio of units to players level
  formula: function (level) {
    return level * 2;
  },
  //PROGRESS: so the player doesnt end up with 666 push ups
  progress: ["wall-pushups", "inclined-pushups", "pushups", "dimond pushups"],
  //DESCRIPTION: special description for skills that cant use measuring units well or need a special prompt or explaination
  description: function () {
    return `do ${unitSet} of ${unit} ${progress[2]}`;
  },
};

const skillList = [
  {
    id: 1,
    name: "Push-ups",
    promptType: promptList.exercising,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 2,
    name: "Pull-ups",
    promptType: promptList.exercising,
    formula: function (level) {
      return level;
    },
  },
  {
    id: 3,
    name: "Curl-ups",
    promptType: promptList.exercising,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 4,
    name: "Squats",
    promptType: promptList.exercising,
    formula: function (level) {
      return level * 2.5;
    },
  },
  {
    id: 5,
    name: "Dumbells",
    promptType: promptList.exercising,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 6,
    name: "Read",
    promptType: promptList.reading,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 7,
    name: "Gratitude",
    promptType: promptList.writing,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 8,
    name: "Journal",
    promptType: promptList.writing,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 8,
    name: "Journal",
    promptType: promptList.writing,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 9,
    name: "Meditation",
    promptType: promptList.time,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 10,
    name: "Run",
    promptType: promptList.distance,
    formula: function (level) {
      return level * 2;
    },
  },
  {
    id: 11,
    name: "Fashion Research",
    promptType: promptList.time,
    formula: function (level) {
      return level * 2;
    },
  },
];
