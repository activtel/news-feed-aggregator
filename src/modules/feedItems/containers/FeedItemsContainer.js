import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import PropTypes from 'prop-types';

import * as actions from '../actions';
import * as selectors from '../selectors';

import List from '../../../common/components/List/List';
import Item from '../components/Item'
import withLoading from '../../../common/hoc/withLoading';
import emptyList from '../../../common/hoc/emptyList';
import withScroll from '../../../common/hoc/withScroll';
import error from '../../../common/hoc/error';

/**
 * Компонент-контйнер для просмотра контента фидов.
 * 
 * @class
 * @extends React.Component
 * 
 * @prop {array} list - список новостей.
 * @prop {array} isLoading - флаг загрузки данных.
 * @prop {array} feeds - список url для загрузки новостей.
 * @prop {array} error - флаг ошибки.
 * @prop {array} emptyText -  текст, при отсуствии новостей.
 * @prop {array} errorText -  текст ошибки.
 * 
 */
class FeedItemsContainer extends Component {

  static propTypes = {
    list: PropTypes.array.isRequired,
    isLoading: PropTypes.bool,
    feeds: PropTypes.array.isRequired,
    error: PropTypes.bool,
    emptyText: PropTypes.string.isRequired,
    errorText: PropTypes.string.isRequired
  };

  /**
   * Загружает новости.
   * @param {array} feeds - список с URL фидов для загрузки новостей.
   */
  loadData = (feeds) => {
    this.props.dispatch(actions.fetchFeeds(feeds));
  }

  componentDidMount() {
    this.loadData(this.props.feeds, true);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.feeds.length !== this.props.feeds.length) {
      this.loadData(nextProps.feeds, true);
    }
  }

  /**
   * Обрабатывает событие скрола.
   */
  onScroll = () => {
    if (
      (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
      this.props.list.length
    ) {
      this.props.dispatch(actions.updateFeeds());
    }
  }

  render() {
    return (
      <div>
        <ListWithLoadingWithEmptyListwWithScroll {...this.props} onScroll={this.onScroll}>
          <Item />
        </ListWithLoadingWithEmptyListwWithScroll>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  list: selectors.getFeedItems(state),
  isLoading: selectors.getIsLoading(state),
  feeds: selectors.getFeeds(state),
  error: selectors.getError(state),
  emptyText: `Список новостей пуст`,
  errorText: `Формат потока не распознан`
});


const ListWithLoadingWithEmptyListwWithScroll = compose(
  error,
  emptyList,
  withLoading,
  withScroll
)(List);

export default connect(mapStateToProps)(FeedItemsContainer);
