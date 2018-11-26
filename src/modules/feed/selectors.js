/**
 * Возвращает фид по его идентификатору.
 * 
 * @param {object} state - состояние приложения.
 * @param {number} id - идентификатор фида.
 * @returns фид.
 * 
 */
export function getFeed(state, id) {
  return state.feeds
    .filter(item => item.id === id)[0];
}