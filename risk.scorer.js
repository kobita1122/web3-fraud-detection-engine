export function scoreRisk(transactions) {
  return transactions.map(tx => {
    return {
      hash: tx.hash,
      riskLevel: tx.amount > 20000 ? "High" : "Medium"
    };
  });
}
