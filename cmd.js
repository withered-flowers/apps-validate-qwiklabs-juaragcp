// Copyleft withered-flowers @ 2021

// Simple apps to fetch the valid quests for JuaraGCP's Season 5
const got = require("got");
const jsdom = require("jsdom");

const { JSDOM } = jsdom;

const {
  formatOutput,
  filterQuests,
  fetchProfileName,
  fetchNodeList,
  calculateTiers,
} = require("./utils.js");

const fetchDataAsJson = async (qwiklabsUrl) => {
  const response = await got(qwiklabsUrl);
  const dom = new JSDOM(response.body);

  const profileName = fetchProfileName(dom);
  const nodeList = fetchNodeList(dom);
  const validQuests = filterQuests(nodeList).map((quest) =>
    formatOutput(quest)
  );
  const tiers = calculateTiers(validQuests);

  return {
    profileName: profileName,
    tiers,
    validQuests: validQuests.length,
    detailValidQuests: validQuests,
  };
};

module.exports = { fetchDataAsJson };
