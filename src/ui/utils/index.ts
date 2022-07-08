export const toFormatString = ({
  amount,
  currency = "USD",
  decimalDigits = 2,
}: {
  amount: number;
  currency?: "EUR" | "USD";
  decimalDigits?: number;
}) => {
  const format = amount.toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: decimalDigits,
  });

  return format;
};
