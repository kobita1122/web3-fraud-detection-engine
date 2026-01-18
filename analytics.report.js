export function generateReport(suspicious, scores) {
  console.log("----- Fraud Detection Report -----");

  if (suspicious.length === 0) {
    console.log("No suspicious transactions detected.");
  } else {
    suspicious.forEach(tx => {
      const score = scores.find(s => s.hash === tx.hash);
      console.log("TX:", tx.hash, "Amount:", tx.amount, "Risk:", score.riskLevel);
    });
  }

  console.log("----------------------------------");
}
