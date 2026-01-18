import { connectRPC } from "./rpc.client.js";
import { loadTransactions } from "./transaction.registry.js";
import { detectFraud } from "./detection.engine.js";
import { scoreRisk } from "./risk.scorer.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("Web3 Fraud Detection Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const transactions = loadTransactions();

const suspicious = detectFraud(transactions);
const riskScores = scoreRisk(suspicious);

generateReport(suspicious, riskScores);
