const formatMilliseconds = (time: number) => {
  const hours = Math.round(time / 360000);
  const minutes = Math.round((time - hours * 36000) / 60000);
  const seconds = Math.round((time - hours * 36000 - minutes * 60000) / 1000);

  const res = [
    `${hours.toString().padStart(2, "0")} heure${hours > 1 ? "s" : ""}`,
    `${minutes.toString().padStart(2, "0")} min`,
    `${seconds.toString().padStart(2, "0")} s`,
  ];

  return [
    ...res,
    `${hours > 0 ? `${res[0]} ` : ""}${minutes > 0 ? `${res[1]} ` : ""}${
      seconds > 0 ? `${res[2]}` : ""
    }`,
  ];
};

export { formatMilliseconds };
