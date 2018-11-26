import * as types from './actionTypes';
import feedsService from './services/feeds';

// количество фидов, отображаемых на странице
let pageSize = 5;

// список с контентом фидов
let resultFeedItems;

/**
 * Запрашивает новый контент фидов
 *
 * @param {array} feedUrls - список URL фидов.
 * 
 */
export function fetchFeeds(feedUrls) {
  return async (dispatch) => {

    // Индикатор загрузки отображается после списка, поэтому при первичной загрузке данных необходимо 
    // очистить текущий список. В простивном случае пользователь не увидит индикатор загрузки, т.к.
    // он физически располагается ниже списка с контентом.
    dispatch({ type: types.FETCHED_FEEDS_CLEAR });

    dispatch({ type: types.LOADING_FEEDS_START });

    try {
     
      resultFeedItems = await feedsService.getFeeds(feedUrls);

      const feedItems = resultFeedItems.slice(0, pageSize)

      dispatch({ type: types.FETCHED_FEEDS, feedItems });

      pageSize++;

    } catch {
      dispatch({ type: types.FETCHED_FEEDS_ERROR });
    }

    dispatch({ type: types.LOADING_FEEDS_END });
  };
}


/**
 * Обновляет контент фидов
 * 
 */
export function updateFeeds() {
  return async (dispatch) => {

    if (pageSize > resultFeedItems.length) {
      return;
    }

    dispatch({ type: types.FETCHED_FEEDS_CLEAR });

    const feedItems = resultFeedItems.slice(0, pageSize)

    dispatch({ type: types.FETCHED_FEEDS, feedItems });

    pageSize++;

    dispatch({ type: types.LOADING_FEEDS_END });
  };
}
