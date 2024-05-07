const getRateLabel = (rate: number) => {
  if (rate < 2) return "faible";
  if (rate < 4) return "moyen";
  return "excellent";
};

export { getRateLabel };
