import * as feedActions from '../feed/actions';

/**
 * Добавляет фид
 * 
 * @param {object} feed - новый фид.
 * 
 */
export function addFeed(feed) {
  return async (dispatch, getState) => {
    // Проеврим, что url ленты новости отсутствует в существующем списке
    const state = getState();
    if (state.feeds.filter(f => f.url === feed.url)[0]) {
      return;
    }

    feedActions.addFeed(feed)(dispatch, getState);
  };
}

/**
 * Удаляет фид
 * 
 * @param {number} id - идентификатор фида.
 * 
 */
export function removeFeed(id) {
  return feedActions.removeFeed(id);
}