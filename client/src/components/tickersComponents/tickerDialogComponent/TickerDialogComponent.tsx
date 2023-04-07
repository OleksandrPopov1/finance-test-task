import {FC} from "react";
import {Button, Dialog, DialogContent, DialogTitle, Divider} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import './TickerDialogComponent.css';
import {ITicker} from "../../../interfaces";
import {TickerChartComponent} from "../tickerChartComponent/TickerChartComponent";
import {TickerChangePercentComponent} from "../tickerChangePercentComponent/TickerChangePercentComponent";
import {TickerChangeComponent} from "../tickerChangeComponent/TickerChangeComponent";


interface IProps {
    open: boolean;
    ticker: ITicker;
    handleCloseDialog: () => void;
}

const TickerDialogComponent: FC<IProps> = ({ticker, open, handleCloseDialog}) => {
    const tradeTime: string = new Date(ticker.last_trade_time).toLocaleDateString("en-US", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        month: 'short',
        day: 'numeric',
        timeZoneName: 'short'
    });

    return (
        <Dialog open={open} maxWidth={false}>
            <DialogTitle className={'dialogTitle'}>
                <div>
                    <p>{ticker.tickerFullName}</p>
                    <Button onClick={handleCloseDialog}>
                        <CloseIcon/>
                    </Button>
                </div>
                <Divider style={{width: '100%'}}/>
            </DialogTitle>
            <DialogContent>

                <div className={'lastUpdate'}>
                    <h2 className={'dialogPrice'}>
                        {ticker.price} $
                    </h2>
                    <TickerChangePercentComponent good={ticker.change_good} changePercent={ticker.change_percent}/>
                    <TickerChangeComponent good={ticker.change_good} change={ticker.change}/>
                </div>

                <div className={'anotherUpdates'}>
                    <p>Dividend: {ticker.dividend}</p>
                    <p>Yield: {ticker.yield}</p>
                </div>

                <div className={'tradeTime'}>
                    <p>{tradeTime}</p>
                    •
                    <p>USD</p>
                    •
                    <p>{ticker.exchange}</p>
                </div>

                <TickerChartComponent lastResults={ticker.last_results}/>
            </DialogContent>
        </Dialog>
    );
};

export {
    TickerDialogComponent
};
