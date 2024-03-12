import { reducerTypeNames } from "@/data/context";
import { TReducer, TState } from "@/types";

const initialState: TState = {
  trainings: [],
};

const reducer: TReducer = (state, action) => {
  switch (action.type) {
    case reducerTypeNames.SET_TRAININGS:
      return {
        ...state,
        trainings: action.payload,
      };
    case reducerTypeNames.SET_ACTUAL_TRAINING:
      return {
        ...state,
        actualTraining: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
