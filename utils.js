const dayjs = require("dayjs");

const {
  LIST_OF_QUESTS,
  DATE_RANGE,
  QWIKLABS_NAME,
  QS_QUEST_NAME,
  QS_QUEST_DAY_OF_COMPLETION,
  TIERS,
} = require("./config.js");

const isValidQuestName = (node) => {
  let bValid = false;

  // Get the Quest Name
  const questName = node
    .querySelector(QS_QUEST_NAME)
    .textContent.replace(/(\r\n|\n|\r)/gm, "");

  // Check if the Quest is valid
  LIST_OF_QUESTS.forEach((quest) => {
    if (quest === questName) {
      bValid = true;
    }
  });

  return bValid;
};

const isValidQuestDate = (node) => {
  let bValid = false;

  // Get the Quest Day of Completion
  const questDayOfCompletion = node
    .querySelector(QS_QUEST_DAY_OF_COMPLETION)
    .textContent.replace(/(\r\n|\n|\r)/gm, "")
    .split("Earned ")[1];

  // Compare with start date
  // cannot be before start date
  // invalid if under 0
  const diffMin = dayjs(questDayOfCompletion, "Asia/Jakarta").diff(
    dayjs(DATE_RANGE[0], "Asia/Jakarta"),
    "d"
  );

  // Compare with finish date
  // cannot be after finish date
  // invalid if over 0
  const diffMax = dayjs(questDayOfCompletion, "Asia/Jakarta").diff(
    dayjs(DATE_RANGE[1], "Asia/Jakarta"),
    "d"
  );

  if (diffMin >= 0 && diffMax <= 0) {
    bValid = true;
  }

  return bValid;
};

const formatOutput = (node) => {
  const questName = node
    .querySelector(QS_QUEST_NAME)
    .textContent.replace(/(\r\n|\n|\r)/gm, "");

  const questDayOfCompletion = node
    .querySelector(QS_QUEST_DAY_OF_COMPLETION)
    .textContent.replace(/(\r\n|\n|\r)/gm, "")
    .split("Earned ")[1];

  // return `${questName} - ${questDayOfCompletion}`;
  return {
    questName,
    questDayOfCompletion,
  };
};

const filterQuests = (nodeList) => {
  return nodeList
    .filter((node) => {
      return isValidQuestName(node) && isValidQuestDate(node);
    })
    .reverse();
};

const fetchProfileName = (dom) => {
  return dom.window.document
    .querySelector(QWIKLABS_NAME)
    .textContent.replace(/(\r\n|\n|\r)/gm, "");
};

const fetchNodeList = (dom) => {
  return [...dom.window.document.querySelectorAll("div.profile-badge")];
};

const calculateTiers = (validQuests) => {
  const total = validQuests.length;
  let tiers = -1;

  TIERS.forEach((minQuest, index) => {
    if (total >= minQuest) {
      tiers = index + 1;
    }
  });

  return tiers;
};

module.exports = {
  isValidQuestName,
  isValidQuestDate,
  formatOutput,
  filterQuests,
  fetchProfileName,
  fetchNodeList,
  calculateTiers,
};
