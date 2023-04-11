import React from 'react';
import {render, screen} from '@testing-library/react';

import {FooterComponent} from './FooterComponent';

test('Footer test', () => {
    render(<FooterComponent/>);
    const footerElement = screen.getByText('Ticker, 2023. All rights reserved.');
    expect(footerElement).toBeInTheDocument();
});
