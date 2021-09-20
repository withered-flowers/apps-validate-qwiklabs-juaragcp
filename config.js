// List of quests to complete
// Fetch from https://goo.gle/juaragcp
const LIST_OF_QUESTS = [
  "Perform Foundational Data, ML, and AI Tasks in Google Cloud",
  "Insights from Data with BigQuery",
  "Exploring Data with Looker",
  "Create ML Models with BigQuery ML",
  "Build and Optimize Data Warehouses with BigQuery",
  "Engineer Data in Google Cloud",
  "Integrate with Machine Learning APIs",
  "BigQuery Basics for Data Analysts",
  "BigQuery for Marketing Analysts",
  "Data Catalog Fundamentals",
  "Building Codeless Pipelines on Cloud Data Fusion",
  "Data Science on Google Cloud",
  "Scientific Data Processing",
  "Data Engineering",
  "Building Advanced Codeless Pipelines on Cloud Data Fusion",
  "NCAA® March Madness®: Bracketology with Google Cloud",
  "Applied Data: Blockchain",
];

// Date Range from Start to Finish
// [0] = Start Date
// [1] = Finish Date
// Format in yyyy-mm-dd
const DATE_RANGE = ["2021-09-16", "2021-09-26"];

// Tiers to finish the quest
// e.g.
// [6, 10, 14]
// Tier 1 = 6 Quests to Complete
// Tier 2 = 10 Quests to Complete
// Tier 3 = 14 Quests to Complete
const TIERS = [6, 10, 14];

// DOM Object for holding the Qwiklabs Profile Name
const QWIKLABS_NAME = "h1.ql-headline-1";

// DOM Object for holding the Qwiklabs Quest Name
const QS_QUEST_NAME = "span.ql-subhead-1.l-mts";

// DOM Object for holding the Qwiklabs Quest Date of Completion
const QS_QUEST_DAY_OF_COMPLETION = "span.ql-body-2.l-mbs";

module.exports = {
  LIST_OF_QUESTS,
  DATE_RANGE,
  QWIKLABS_NAME,
  QS_QUEST_NAME,
  QS_QUEST_DAY_OF_COMPLETION,
  TIERS,
};
