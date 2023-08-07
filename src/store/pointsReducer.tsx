import { ADD_POINTS, REMOVE_POINTS } from '@constans/reducerActionType';
import { type IAction, type IDefaultPoints } from './pointsReducer.interface';

const defaultState: IDefaultPoints = {
  points: 0,
};

export const pointsReducer = (state: IDefaultPoints = defaultState, action: IAction): any => {
  switch (action.type) {
    case ADD_POINTS:
      return { ...state, points: state.points + action.payload };
    case REMOVE_POINTS:
      return { ...state, points: state.points - action.payload };
    default:
      return state;
  }
};
