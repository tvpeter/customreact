import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './parent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Parent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
