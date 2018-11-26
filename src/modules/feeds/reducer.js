import { feed } from '../feed/reducer';
import * as types from '../feed/actionTypes';

/**
 * Редьюсер для преобразования части состояния приложения, связанного с фидами.
 */
export const feeds = (state = [], action = {}) => {
  switch (action.type) {
    case types.ADD_FEED:
      return [
        ...state,
        feed({}, action)
      ];
    case types.REMOVE_FEED:
      return state.filter(f => f.id !== action.id)
    default:
      return state;
  }
}