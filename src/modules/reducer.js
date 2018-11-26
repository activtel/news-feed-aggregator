import { combineReducers } from 'redux';

import { feeds } from './feeds/reducer';
import { feedItems } from './feedItems/reducer';

export const reducer = () => {
  return combineReducers({ feeds, feedItems })
};