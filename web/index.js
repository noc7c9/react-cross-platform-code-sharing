/*
 * Entry file for web.
 *
 * Renders the shared component.
 */

import React from 'react';
import ReactDOM from 'react-dom';

// Note: the import is from "shared", it is not a path.
import TimeSinceRender from 'shared/time-since-render';

ReactDOM.render(<TimeSinceRender />, document.querySelector('#app'));
