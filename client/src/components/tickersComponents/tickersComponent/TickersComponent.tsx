import {FC} from "react";

import './TickersComponent.css';
import {useAppSelector} from "../../../hooks";
import {TickerComponent} from "../tickerComponent/TickerComponent";


const TickersComponent: FC = () => {

    const {tickers} = useAppSelector(state => state.ticker);

    return (
        <div className={'tickersComponent'}>
            <h2>You may be interested</h2>
            {tickers.map(ticker => <TickerComponent key={ticker.tickerName} ticker={ticker}/>)}
        </div>
    );
};

export {
    TickersComponent
};
