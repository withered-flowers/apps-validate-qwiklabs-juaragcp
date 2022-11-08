// List of quests to complete
// Fetch from https://goo.gle/juaragcp
const LIST_OF_QUESTS = [
  "Deploy and Manage Cloud Environments with Google Cloud",
  "Secure Workloads in Google Kubernetes Engine",
  "Measure Site Reliability using Cloud Operations Suite",
  "Optimize Costs for Google Kubernetes Engine",
  "Create and Manage Cloud Resources",
  "Perform Foundational Infrastructure Tasks in Google Cloud",
  "Monitor Environments with Google Cloud Managed Service for Prometheus",
  "Cloud Architecture: Design, Implement, and Manage",
  "Protect Cloud Traffic with BeyondCorp Enterprise (BCE) Security",
  "Deploy to Kubernetes in Google Cloud",
  "Set Up and Configure a Cloud Environment in Google Cloud",
  "Build and Secure Networks in Google Cloud",
  "Automating Infrastructure on Google Cloud with Terraform",
  "Implement DevOps in Google Cloud",
  "Monitor and Log with Google Cloud Operations Suite",
  "Baseline: Infrastructure",
  "Cloud Architecture",
  "Cloud Engineering",
  "Networking in Google Cloud",
  "Google Cloud's Operations Suite on GKE",
  "Security & Identity Fundamentals",
  "Applied Data: Blockchain",
  "Cloud Development",
  "Managing Security in Google Cloud",
  "Understanding Google Cloud Security and Operations",
  "Site Reliability Engineering: Measuring and Managing Reliability",
  "Google Cloud Computing Foundations: Infrastructure in Google Cloud - Locales",
];

// Date Range from Start to Finish
// [0] = Start Date
// [1] = Finish Date
// Format in yyyy-mm-dd
const DATE_RANGE = ["2022-11-08", "2022-12-04"];

// Tiers to finish the quest
// e.g.
// [6, 10, 14]
// Tier 1 = 6 Quests to Complete
// Tier 2 = 10 Quests to Complete
// Tier 3 = 14 Quests to Complete
const TIERS = [8, 14];

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
