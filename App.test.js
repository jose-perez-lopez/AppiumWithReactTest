import React from 'react';
import {Main} from './src/components/index'

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create(<Main />).toJSON();
  console.log(rendered)
  expect(rendered).toBeTruthy();
});
