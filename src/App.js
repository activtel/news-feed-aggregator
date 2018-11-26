import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FeedsContainer from './modules/feeds/containers/FeedsContainer';
import FeedItemsContainer from './modules/feedItems/containers/FeedItemsContainer';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-5">
            <FeedsContainer />
          </div>
          <div className="col-7">
            <FeedItemsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
