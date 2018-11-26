/**
 * Возвращает контент фидов.
 * 
 * @param {object} state - состояние приложения.
 * @returns контент фидов.
 */
export function getFeedItems(state) {
  if (!state.feedItems.items) {
    return [];
  }
  return state.feedItems.items.sort((a, b) => b.published - a.published);
}

/**
 * Возвращает флаг загрузки.
 * 
 * @param {object} state - состояние приложения.
 * @returns флаг загрузки.
 */
export function getIsLoading(state) {
  return state.feedItems.isLoading;
}

/**
 * Возвращает список url фидов.
 * 
 * @param {object} state - состояние приложения.
 * @returns список фидов.
 * 
 */
export function getFeeds(state) {
  return state.feeds.map(f => f.url);
}

/**
 * Возвращает состояние запроса фидов.
 * 
 * @param {object} state - состояние приложения.
 * @returns состояние запроса.
 * 
 */
export function getError(state) {
  return state.feedItems.error;
}