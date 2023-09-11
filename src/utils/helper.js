export const formatCurrencyDecimal = (num) => {
  const roundedFig = num.toFixed(2);
  return roundedFig.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
