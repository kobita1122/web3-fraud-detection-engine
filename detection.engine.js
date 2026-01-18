export function detectFraud(transactions) {
  console.log("Detecting suspicious transactions...");

  return transactions.filter(tx => tx.amount > 10000);
}
