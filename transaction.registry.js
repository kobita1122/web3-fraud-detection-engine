export function loadTransactions() {
  console.log("Loading transaction stream...");

  return [
    { from: "0xUSER001", to: "0xUSER002", amount: 50, hash: "0xTX001" },
    { from: "0xUSER001", to: "0xUSER003", amount: 50000, hash: "0xTX002" },
    { from: "0xUSER004", to: "0xUSER005", amount: 30, hash: "0xTX003" }
  ];
}
