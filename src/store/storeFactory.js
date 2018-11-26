import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from '../modules/reducer'

// наименование ключа в локальном хранилище localStorage
const LOCAL_STORAGE_NAME = 'news-feed-aggregator';


//middleware для логирования действий и store в консоль
const logger = store => next => action => {
  console.groupCollapsed("dispatching", action.type);
  console.log('prev state', store.getState());
  console.log('action', action);
  next(action);
  console.log('next state', store.getState());
  console.groupEnd()
}

// middleware для сохранения store в локальном хранилище localStorage
const saver = store => next => action => {
  let result = next(action);
  
  // В LocalStorage храним сосотояние приложения, за исключением контента фидов
  let {feedItems, ...state} = store.getState()
  localStorage[LOCAL_STORAGE_NAME] = JSON.stringify(state);
  return result;
}

const storeFactory = () =>
  createStore(
    reducer(),
    (localStorage[LOCAL_STORAGE_NAME])
      ? JSON.parse(localStorage[LOCAL_STORAGE_NAME])
      : {},
    applyMiddleware(logger, saver, thunk));

export default storeFactory;