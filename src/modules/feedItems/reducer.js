import * as types from './actionTypes';

/**
 * Редьюсер для преобразования части состояния приложения, связанного с фидами.
 * 
 */
export const feedItems = (state = { loading: true }, action = {}) => {
  switch (action.type) {

    case types.FETCHED_FEEDS_ERROR:
      return {
        ...state,
        error: true
      };

    case types.FETCHED_FEEDS_CLEAR:
      const { items, ...newState } = state;
      return newState;

    case types.FETCHED_FEEDS:
      const newItems = action.feedItems.map(item => ({
        ...item,
        id: item.title, // присвоим идентификатор, в данном случае пусть это будет заголовок, т.к. он уникальный
      }));
      return {
        ...state,
        error: false,
        items: newItems
      };

    case types.LOADING_FEEDS_START:
      return {
        ...state,
        isLoading: true,
        error: false
      };

    case types.LOADING_FEEDS_END:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
}