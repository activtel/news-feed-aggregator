import * as types from './actionTypes';


/**
 * Добавляет фид
 * 
 * @param {object} feed - новый фид.
 * 
 */
export function addFeed(feed) {
  return async (dispatch) => {
    dispatch({ type: types.ADD_FEED, feed });
  }
};

/**
 * Удаляет фид
 * 
 * @param {number} id - идентификатор фида.
 * 
 */
export function removeFeed(id) {
  return async (dispatch) => {
    dispatch({ type: types.REMOVE_FEED, id });
  };
}