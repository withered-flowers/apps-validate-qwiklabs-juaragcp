// Copyleft withered-flowers @ 2021

// Simple apps to fetch the valid quests for JuaraGCP's Season 5
const got = require("got");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const qwiklabsUrl = "";

const {
  formatOutput,
  filterQuests,
  fetchProfileName,
  fetchNodeList,
} = require("./utils.js");

// Command Line Apps
(async () => {
  const response = await got(qwiklabsUrl);
  const dom = new JSDOM(response.body);

  const profileName = fetchProfileName(dom);
  const nodeList = fetchNodeList(dom);
  const validQuests = filterQuests(nodeList);

  console.log(`${profileName}`);

  // Output for List of Quests
  validQuests.forEach((quest) => {
    console.log(formatOutput(quest));
  });

  console.log(validQuests.length + " Quests is valid.");
  // End of Output for List of Quests
})();
