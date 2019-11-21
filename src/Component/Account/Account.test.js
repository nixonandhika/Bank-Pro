import React from "react";
import Account from './Account';
import renderer from 'react-test-renderer';

it('matches the snapshot', () => {
    const tree = renderer.create(<Account />).toJSON();
    expect(tree).toMatchSnapshot();
});