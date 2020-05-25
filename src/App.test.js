import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Checking if everything is laoded', () => {
	test('Checking if Members is loaded', () => {});
});
