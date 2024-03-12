import { IconBaseProps } from "react-icons";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

const YellowRate = ({
  rate,
  color,
  props,
}: {
  rate: number;
  color?: string;
  props?: IconBaseProps;
}) => {
  const iconColor = color || "#99aa00";
  return (
    <div className="inline-flex gap-1 items-center">
      {Array(Math.floor(rate) >= 5 ? 5 : Math.floor(rate))
        .fill(0)
        .map((_, index) => {
          return (
            <FaStar
              key={`star-${index}`}
              color={iconColor}
              size={20}
              {...props}
            />
          );
        })}
      {rate < 5 && rate - Math.floor(rate) !== 0 && (
        <FaStarHalfAlt color={iconColor} size={20} {...props} />
      )}
      {rate < 5 &&
        Array(5 - Math.ceil(rate))
          .fill(0)
          .map((_, index) => {
            return (
              <FaRegStar
                key={`star-${index}`}
                color={iconColor}
                size={20}
                {...props}
              />
            );
          })}
    </div>
  );
};

export { YellowRate };
