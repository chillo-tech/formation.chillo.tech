import { TOption } from "@/types";
import classNames from "classnames";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { FaCheck } from "react-icons/fa6";
import { HiOutlineChevronUpDown } from "react-icons/hi2";

const SelectContext = createContext<{
  state: {
    options: TOption[];
    selected: null | TOption;
  };
  setState: React.Dispatch<
    React.SetStateAction<{
      options: TOption[];
      selected: null | TOption;
    }>
  >;
  setIsVisible: Function;
  handleSelect: Function;
}>({
  state: {
    options: [],
    selected: null,
  },
  setState: () => {},
  handleSelect: () => {},
  setIsVisible: () => {},
});

const Select = ({
  options,
  handleSelect,
}: {
  options: TOption[];
  handleSelect: Function;
}) => {
  const [state, setState] = useState<{
    options: TOption[];
    selected: null | TOption;
  }>({
    options,
    selected: options[0],
  });

  const [isVisible, setIsVisible] = useState(false);

  const handleDisplay = () => {
    setIsVisible((prev) => !prev);
  };

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (
        isVisible &&
        containerRef.current &&
        !containerRef.current.contains(e.target)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isVisible]);

  return (
    <SelectContext.Provider
      value={{ state, setState, handleSelect, setIsVisible }}
    >
      <div ref={containerRef} className="relative">
        <div
          onClick={handleDisplay}
          className=" border border-gray-300 px-2 py-2 bg-transparent  rounded-md focus-visible:outline-blue-500 sm:w-fit flex gap-4 justify-between items-center"
        >
          {state.selected?.text} <HiOutlineChevronUpDown />
        </div>
        {isVisible && (
          <div className="absolute overflow-hidden shadow-md bg-white top-[110%] left-0 min-w-[250px] rounded-md">
            {options.map((option, index) => {
              return <Option key={`option-${index}`} option={option} />;
            })}
          </div>
        )}
      </div>
    </SelectContext.Provider>
  );
};

const Option = ({ option }: { option: TOption }) => {
  const { setIsVisible, handleSelect, setState, state } =
    useContext(SelectContext);
  const handleClick = () => {
    handleSelect(option);
    setState((prev) => ({ ...prev, selected: option }));
    setIsVisible(false);
  };
  return (
    <div
      className={`flex items-center p-2 cursor-pointer hover:bg-blue-500 hover:text-white justify-between ${classNames(
        {
          "text-blue-500 text-bold": state.selected?.value === option.value,
        }
      )}`}
      onClick={handleClick}
    >
      {option.text}{" "}
      {state.selected?.value === option.value && <FaCheck size={20} />}
    </div>
  );
};

export { Select };
