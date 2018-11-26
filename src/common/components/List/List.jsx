import React from 'react';
import PropTypes from 'prop-types';

/**
 * Компонент для отображения списка.
 * 
 * @param {object} list - список.
 * @param {node} children - вложенные компоненты.
 */
const List = ({ list, children }) => {

  const listChildren = (item, index) => React.Children.map(children, child => {
    return React.cloneElement(child, {
      index,
      ...item
    });
  });
  
  return (
    <div>
      <ul className="list-group">
        {
          list.map((item, index) =>
            <li className="list-group-item" key={item.id}>
              {listChildren(item, index)}
            </li>
          )}

      </ul>
    </div>
  )
};

List.propTypes = {
  list: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
};

export default List;