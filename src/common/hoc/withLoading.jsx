import React from 'react';

import Preloader from '../components/Preloader/Preloader'

/**
 * HOC для добавления прелоадера.
 * 
 */

export default (Component) => (props) =>
<div>
  <Component {...props} />

  <div className="interactions">
    {props.isLoading && <Preloader />}
  </div>
</div>