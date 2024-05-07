import { reducerTypeNames } from "@/data/context";
import { ISession, ITraining } from ".";
import { THomeView } from "..";

type TState = {
  trainings: ITraining[];
  actualTraining?: ITraining;
  actualSession?: ISession;
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
    }
  | {
      type: typeof reducerTypeNames.SET_ACTUAL_SESSION;
      payload: ISession;
    };
type TReducer = (state: TState, action: TAction) => TState;

export type { TAction, TReducer, TState };
