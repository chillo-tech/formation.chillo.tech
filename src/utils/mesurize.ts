const units = [
  {
    label: "M",
    value: 1_000_000,
  },
  {
    label: "K",
    value: 1_000,
  },
  {
    label: "0",
    value: 10,
  },
  {
    label: "",
    value: 1,
  },
];

const mesurize = (count: number) => {
  const unit = units.find((unit) => count >= unit.value);
  if (!unit) return count.toString();
  if (count % unit.value === 0) return `${count / unit.value}${unit.label}`;
  return `${Math.floor(count / unit.value)}${unit.label}+`;
};

export { mesurize };
