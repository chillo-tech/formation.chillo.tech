import React, { createContext, useReducer } from "react";
import { initialState, reducer } from "./ApplicationReducer";
import { TAction, TState } from "@/types";

export const ApplicationContext = createContext<{
  state: TState;
  dispatch: React.Dispatch<TAction>;
}>({
  state: initialState,
  dispatch: () => initialState,
});

const ApplicationWrapper = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ApplicationContext.Provider value={{ state, dispatch }}>
      <div>{children}</div>
    </ApplicationContext.Provider>
  );
};

export { ApplicationWrapper };


