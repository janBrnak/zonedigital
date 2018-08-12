import React from 'react';
import ReactDOM from 'react-dom';
import FilterByVoteAverage from './FilterByVoteAverage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FilterByVoteAverage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
