import React from "react";
import History from './History';
import renderer from 'react-test-renderer';

it('matches the snapshot', () => {
    const tree = renderer.create(<History />).toJSON();
    expect(tree).toMatchSnapshot();
});