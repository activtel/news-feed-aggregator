import React from 'react';
import PropTypes from 'prop-types';
import FeedAddForm from '../../feed/component/FeedAddForm';

/**
 * Компонент для просмотра списка фидов.
 * 
 * @param {array} feeds - список.
 * @param {func} addFeed - метод для удаления информации о фиде.
 * @param {func} removeFeed - метод для удаления информации о фиде.
 * 
 */
const Feeds = ({ feeds, addFeed, removeFeed }) => (
  <div>
    <FeedAddForm onAddFeed={addFeed} />
    <div className="card">
      <div className="card-body">
        <ul className="list-group">
          {
            feeds.map((feed) =>
              <li className="list-group-item" key={feed.id}>
                <div className="row">
                  <div className="col-10 text-truncate">{feed.url}</div>
                  <div className="col-2"><button onClick={() => removeFeed(feed.id)} className="btn btn-danger float-right btn-remove">X</button></div>
                </div>
              </li>
            )}
        </ul>
      </div>
    </div>
  </div>
);

Feeds.propTypes = {
  feeds: PropTypes.array.isRequired,
  addFeed: PropTypes.func.isRequired,
  removeFeed: PropTypes.func.isRequired,
};

export default Feeds;