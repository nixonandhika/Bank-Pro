import React from "react";
import Transfer from './Transfer';
import renderer from 'react-test-renderer';

it('matches the snapshot', () => {
    const tree = renderer.create(<Transfer />).toJSON();
    expect(tree).toMatchSnapshot();
});