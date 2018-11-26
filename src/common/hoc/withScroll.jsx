import React from 'react';

/**
 * HOC для добавления функционала при прокрутке.
 * 
 */
export default (Component) =>
  class WithScroll extends React.Component {
    componentDidMount() {
      window.addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }

    onScroll = () => {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 500) &&
        this.props.list.length &&
        !this.props.isLoading) {
        this.props.onScroll();
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }