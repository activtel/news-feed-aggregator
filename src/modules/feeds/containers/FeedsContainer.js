import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import * as selectors from '../selectors';
import Feeds from '../components/Feeds';

/**
 * Компонент-контйнер для просмотра списка фидов.
 * 
 * @class
 * @extends React.Component
 * 
 * @prop {array} feeds
 */
class FeedsContainer extends Component {

  static propTypes = {
    feeds: PropTypes.array.isRequired,
  };

  /**
   * Добавляет фид.
   * @param {object} feed - новый фид.
   */
  addFeed = (feed) => {
    this.props.dispatch(actions.addFeed(feed));
  }

  /**
   * Удаляет фид.
   * @param {number} id - идентификатор фида
   */
  removeFeed = (id) => {
    this.props.dispatch(actions.removeFeed(id));
  }

  render() {
    return (
      <div>
        <Feeds feeds={this.props.feeds} addFeed={this.addFeed} removeFeed={this.removeFeed} />
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  feeds: selectors.getFeeds(state)
});


export default connect(mapStateToProps)(FeedsContainer);
