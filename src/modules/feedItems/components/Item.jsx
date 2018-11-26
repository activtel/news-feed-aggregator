import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент для отображения конкретного фида.
 * 
 * @param {object} index - индекс новости.
 * @param {object} list - данные новости.
 * 
 */
const Item = ({ index, ...item}) => {
  const size = 100;
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="card-block p-1">
            <div className="card-title">
              <h5>{item.title}</h5>
              <h6>{item.published.toString()}</h6>
            </div>
            <p className="card-subtitle text-muted text-truncate">
              <a className="text-truncate" href={item.link} target="_blank" rel="noopener noreferrer">
                {item.link}
              </a>
            </p>
            <div className="card-text mx-auto text-center">
              {item.content.length > size ? item.content.slice(0, size) + ' ...' : item.content}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};

Item.propTypes = {
  index: PropTypes.number, 
  item: PropTypes.object,
};

export default Item;