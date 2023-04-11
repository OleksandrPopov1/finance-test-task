import React from 'react';
import {render, screen} from '@testing-library/react';

import {TickerChangePercentComponent} from './TickerChangePercentComponent';

describe('Ticker change percent test', () => {
    test('Ticker change percent good', () => {
        render(<TickerChangePercentComponent changePercent={25} good={true}/>);
        const tickerChange = screen.getByTestId('tickerChangePercentComponent');
        expect(tickerChange).toBeInTheDocument();
        expect(tickerChange).toHaveClass('tickerComponentChangePercentGreen');
        expect(tickerChange).toHaveTextContent('🠕');
    });
    test('Ticker change percent bad', () => {
        render(<TickerChangePercentComponent changePercent={25} good={false}/>);
        const tickerChange = screen.getByTestId('tickerChangePercentComponent');
        expect(tickerChange).toBeInTheDocument();
        expect(tickerChange).toHaveClass('tickerComponentChangePercentRed');
        expect(tickerChange).toHaveTextContent('🠗');
    });
})
