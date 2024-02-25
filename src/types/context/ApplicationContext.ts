import { reducerTypeNames } from "@/data/context";
import { ITraining } from ".";
import { THomeView } from "..";

type TState = {
  trainings: ITraining[];
};

type TAction =
  | {
      type: typeof reducerTypeNames.SET_TRAININGS;
      payload: ITraining[];
    }
  | {
      type: typeof reducerTypeNames.SET_HOME_VIEW;
      payload: THomeView;
    };

type TReducer = (state: TState, action: TAction) => TState;

export type { TAction, TReducer, TState };
