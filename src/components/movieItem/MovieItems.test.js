import React from 'react';
import ReactDOM from 'react-dom';
import MovieItems from './MovieItems';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieItems />, div);
  ReactDOM.unmountComponentAtNode(div);
});
