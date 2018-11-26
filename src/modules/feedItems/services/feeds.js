import feedReadParser from 'feed-read-parser';

const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

/**
 * Преобразует вызов feed-read-parser с обратным вызовом в Promise
 */
function feedReadParserAsync(param) {
  return new Promise(function (resolve, reject) {
    feedReadParser(param, function (err, articles) {
      if (err) return reject(err);
      return resolve(articles);
    });

  })
}


/**
 * Сервис для получения фидов.
 * 
 * @class
 */
class FeedsService {
  /**
   * Возвращает фиды
   * 
   * @param {array} urls - список URL с фидами.
   * @returns фиды.
   */
  async getFeeds(urls=[]) {
    const rss = urls.map(url => `${CORS_PROXY}${url}`);
    return await feedReadParserAsync(rss);
  }
}

export default new FeedsService();