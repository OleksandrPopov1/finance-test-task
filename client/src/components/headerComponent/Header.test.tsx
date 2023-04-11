import React from 'react';
import {render, screen} from '@testing-library/react';

import {HeaderComponent} from './HeaderComponent';

test('Header test', () => {
    render(<HeaderComponent/>);
    const headerElement = screen.getByText('Price Ticker');
    expect(headerElement).toBeInTheDocument();
});
