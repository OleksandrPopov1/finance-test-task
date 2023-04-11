import {FC} from "react";

import './TickerChangePercentComponent.css';

interface IProps {
    good: boolean;
    changePercent: number;
}

const TickerChangePercentComponent: FC<IProps> = ({changePercent, good}) => {
    return (
        <h3 data-testid='tickerChangePercentComponent'
            className={`tickerComponentChange ${good ? 'tickerComponentChangePercentGreen' : 'tickerComponentChangePercentRed'}`}>
            {good ? '🠕' : '🠗'}
            {changePercent}%
        </h3>
    );
};

export {
    TickerChangePercentComponent
};
