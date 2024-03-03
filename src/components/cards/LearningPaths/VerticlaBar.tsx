const VerticlaBar = ({
  count,
  parentHeght,
  childrenSizes,
}: {
  childrenSizes?: number[] | null;
  count: number;
  parentHeght: number;
}) => {
  const genDots = () => {
    if (!childrenSizes || childrenSizes.length === 0) return null;
    let top = 0;
    const toRender = [];
    for (let i = 0; i < count; i++) {
      toRender.push(
        <div
          key={i}
          className="bg-gray-200 absolute h-[25px] w-[25px] rounded-[50%]"
          style={{
            top: top - 12.5,
            left: -12.5,
          }}
        ></div>
      );
      if (i + 1 < count) top += childrenSizes[i] / 2 + childrenSizes[i + 1] / 2;
      else top += childrenSizes[i] / 2;
    }
    return toRender;
  };
  return (
    childrenSizes &&
    childrenSizes.length > 0 && (
      <div
        className="relative w-1 bg-gray-300"
        style={{
          top: childrenSizes[0] * 0.5,
          bottom: childrenSizes[childrenSizes.length - 1] * 0.5,
          height:
            parentHeght -
            (childrenSizes[0] + childrenSizes[childrenSizes.length - 1]) * 0.5,
        }}
      >
        {genDots()}
      </div>
    )
  );
};

export { VerticlaBar };
