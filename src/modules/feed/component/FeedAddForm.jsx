import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент для добавления фида.
 * 
 * @class
 * @extends React.Component
 * 
 * @prop {function} onAddFeed - обратный вызов для добавления фида.
 * 
 */

export default class FeedAddForm extends Component {

  static propTypes = {
    onAddFeed: PropTypes.func.isRequired
  };

  /**
   * Создает компонент.
   * @param {object} props - свойства компонента.
   */
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };

    this.submit = this.submit.bind(this);
  }

  /**
   * Обрабатывает событие нажатия на кнопку отправки формы.
   * @param {object} e - Объект события.
   */
  submit = e => {
    e.preventDefault();
    this.props.onAddFeed({ url: this.state.url });
  }

  render() {
    return (
      <div className="card">
        <div className="card-header">
          Добавить ленту новостей
        </div>
        <div className="card-body">
          <form onSubmit={this.submit} className="form-inline" >
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="url" className="sr-only">Url</label>
              <input
                type="text"
                value={this.state.url}
                className="form-control"
                id="url"
                onChange={(event) => this.setState({ url: event.target.value })}
                placeholder="Url ленты новостей"
                required />
            </div>
            <button className="btn btn-success mb-2">Добавить</button>
          </form>
        </div>
      </div>
    )
  }
}
