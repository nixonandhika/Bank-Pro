import React from "react";
import Login from './Login';
import renderer from 'react-test-renderer';

it('matches the snapshot', () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
});