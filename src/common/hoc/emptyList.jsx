import React from 'react';

/**
 * HOC для отображения сообщения о пустом списке.
 * 
 */

export default (Component) => (props) =>
<div>
  { (props.list.length === 0) && !props.isLoading && <h3>{props.emptyText}</h3> }
  <Component {...props} />
</div>