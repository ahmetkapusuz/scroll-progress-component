import React from 'react';
import ScrollProgress from '../index';
import renderer from 'react-test-renderer';

test('Should render successfully', () => {
  const component = renderer.create(<ScrollProgress />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
