/**
 * Generates UPI Intent URL from the given data
 * @param tr enter the tr
 * @param tid enter the tid
 * @param pa enter merchant_vpa
 * @param mc enter the mcc
 * @param pn enter the merchant name
 * @param am enter the amount
 * @param tn enter the description for the transaction
 * @returns
 */
export const generateUrl = (params: {
  tr?: string;
  tid?: string;
  pa?: string;
  mc?: string;
  pn?: string;
  am?: string;
  tn?: string;
}) => {
  const searchParams = new URLSearchParams(params);
  return new URL(`upi://pay?${searchParams}`).toString();
};
