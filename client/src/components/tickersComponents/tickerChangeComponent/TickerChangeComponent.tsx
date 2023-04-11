import {FC} from "react";

import './TickerChangeComponent.css';

interface IProps {
    good: boolean;
    change: number;
}

const TickerChangeComponent: FC<IProps> = ({change, good}) => {
    return (
        <h3 data-testid="tickerChangeComponent"
            className={`tickerComponentChange ${good ? 'tickerComponentChangeGreen' : 'tickerComponentChangeRed'}`}>
            {good ? '+' : '-'}
            {change} $
        </h3>
    );
};

export {
    TickerChangeComponent
};
