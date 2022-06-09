export const formatAmount = (amount) => {
  var formatter = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TUR",
  });

  return formatter.format(amount);
};
