import React from "react";
import Navigation from './Navigation';
import renderer from 'react-test-renderer';

it('matches the snapshot', () => {
    const tree = renderer.create(<Navigation />).toJSON();
    expect(tree).toMatchSnapshot();
});