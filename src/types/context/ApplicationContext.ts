import { reducerTypeNames } from "@/data/context";
import { ITraining } from ".";
import { THomeView } from "..";

type TState = {
  trainings: ITraining[];
  actualTraining?: ITraining;
};

type TAction =
  | {
      type: typeof reducerTypeNames.SET_TRAININGS;
      payload: ITraining[];
    }
  | {
      type: typeof reducerTypeNames.SET_HOME_VIEW;
      payload: THomeView;
    }
  | {
      type: typeof reducerTypeNames.SET_ACTUAL_TRAINING;
      payload: ITraining;
    };

type TReducer = (state: TState, action: TAction) => TState;

export type { TAction, TReducer, TState };
