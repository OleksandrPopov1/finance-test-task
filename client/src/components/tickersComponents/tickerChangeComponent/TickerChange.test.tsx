import React from 'react';
import {render, screen} from '@testing-library/react';

import {TickerChangeComponent} from './TickerChangeComponent';

describe('Ticker change test', () => {
    test('Ticker change good', () => {
        render(<TickerChangeComponent change={200} good={true}/>);
        const tickerChange = screen.getByTestId('tickerChangeComponent');
        expect(tickerChange).toBeInTheDocument();
        expect(tickerChange).toHaveClass('tickerComponentChangeGreen');
        expect(tickerChange).toHaveTextContent('+');
    });
    test('Ticker change bad', () => {
        render(<TickerChangeComponent change={200} good={false}/>);
        const tickerChange = screen.getByTestId('tickerChangeComponent');
        expect(tickerChange).toBeInTheDocument();
        expect(tickerChange).toHaveClass('tickerComponentChangeRed');
        expect(tickerChange).toHaveTextContent('-');
    });
})
