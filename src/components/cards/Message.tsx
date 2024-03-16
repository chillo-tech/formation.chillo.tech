import { KazimirRegular } from "@/fonts";
import classNames from "classnames";
import React from "react";

const Message = ({
  label,
  title,
  message,
  isError = false,
  action,
  btnClassName = "",
}: {
  label?: string;
  title?: string;
  message?: string;
  isError?: boolean;
  action?: {
    buttonLabel: string;
    handleFn: Function;
  };
  btnClassName?: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center h-full w-full flex-col p-8 text-blue-500 ${classNames(
        {
          "text-red-500": isError,
        }
      )}`}
    >
      {title && (
        <h3 className={`text-2xl pb-3 ${KazimirRegular.className}`}>{title}</h3>
      )}
      {label && <p className="fontF-heading">{label}</p>}
      {message && <p className="text-text text-center text-lg">{message}</p>}

      {action && (
        <button
          className={`py-3 my-4 px-6 font bold rounded-[35px] bg-blue-500 text-white w-full lg:w-fit ${classNames(
            {
              "bg-red-500 text-white": isError,
            }
          )} ${btnClassName}`}
          onClick={() => action.handleFn()}
        >
          {action.buttonLabel}
        </button>
      )}
    </div>
  );
};

export default Message;
