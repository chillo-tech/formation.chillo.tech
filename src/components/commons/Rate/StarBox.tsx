import { FaStar } from "react-icons/fa6";

const StarBox = ({ percentage }: { percentage: number }) => {
  return (
    <div className="h-[18px] w-[18px] relative bg-gray-200">
      <div
        className={`h-full bg-green-300`}
        style={{
          width: percentage >= 1 ? 18 : percentage <= 0 ? 0 : percentage * 18,
        }}
      />
      <FaStar
        color="white"
        size={14}
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
    </div>
  );
};

export { StarBox };
