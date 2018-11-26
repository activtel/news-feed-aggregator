import uuidv1 from 'uuid/v1';

import * as types from './actionTypes';

/**
 * Редьюсер для преобразования части состояния приложения, связанного с конкретным фидом.
 * 
 */
export const feed = (state = {}, action) => {
  switch (action.type) {
    case types.ADD_FEED:
      return {
        id: uuidv1(),
        url: action.feed.url,
      }
    default:
      return state
  }
}