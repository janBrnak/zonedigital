import React from 'react';
import ReactDOM from 'react-dom';
import FilterByGenres from './FilterByGenres';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterByGenres />, div);
  ReactDOM.unmountComponentAtNode(div);
});
