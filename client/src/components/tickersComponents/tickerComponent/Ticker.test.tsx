import React from 'react';
import {render, screen} from '@testing-library/react';
import fireEvent from "@testing-library/user-event";

import {TickerComponent} from './TickerComponent';
import {ITicker} from "../../../interfaces";


const now = new Date();

const ticker: ITicker = {
    tickerName: 'AAPL',
    tickerFullName: 'Apple',
    exchange: 'NASDAQ',
    price: 200,
    change: 100,
    change_percent: 0.5,
    change_good: true,
    dividend: 0.5,
    yield: 0.5,
    last_results: [100, 110, 120, 130, 140, 150],
    last_trade_time: new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes()).toString()
};


describe('Ticker test', () => {
    test('Ticker hide', async () => {
        render(<TickerComponent ticker={ticker}/>);
        const buttonHide = screen.getByRole('button');

        expect(screen.getByTestId('tickerData')).toBeInTheDocument();
        await fireEvent.click(buttonHide);
        expect(screen.queryByTestId('tickerData')).toBeNull();
        await fireEvent.click(buttonHide);
        expect(screen.getByTestId('tickerData')).toBeInTheDocument();
    });
    // test('Ticker dialog show', async () => {
    //     render(<TickerComponent ticker={ticker}/>);
    //     const tickerComponent = screen.getByTestId('tickerInformation');
    //
    //     await fireEvent.click(tickerComponent);
    //     expect(screen.queryByTestId('tickerInformation')).toBeNull();
    // });
})
