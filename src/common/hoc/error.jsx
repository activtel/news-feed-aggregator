import React from 'react';

/**
 * HOC для отображения сообщения о ошибке.
 * 
 */

export default (Component) => (props) =>
  <div>
    {(props.error && !props.isLoading)
      ? <h3>{props.errorText}</h3>
      : <Component {...props} />
    }
  </div>