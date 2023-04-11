import {FC, useState} from "react";
import {Badge, Button, Divider} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './TickerComponent.css';
import {ITicker} from "../../../interfaces";
import {TickerDialogComponent} from "../tickerDialogComponent/TickerDialogComponent";
import {TickerChangeComponent} from "../tickerChangeComponent/TickerChangeComponent";
import {TickerChangePercentComponent} from "../tickerChangePercentComponent/TickerChangePercentComponent";


interface IProps {
    ticker: ITicker
}

const TickerComponent: FC<IProps> = ({ticker}) => {

    const [showTicker, setShowTicker] = useState<boolean>(true);
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    const switchShowTicker = (): void => {
        setShowTicker(!showTicker)
    };

    const handleOpenDialog = (): void => {
        setOpenDialog(true);
    };
    const handleCloseDialog = (): void => {
        setOpenDialog(false);
    }

    return (
        <div data-testid='ticker'
             className={'tickerContainer'}>
            {showTicker && <div data-testid='tickerData'>
                <Divider style={{width: '100%'}}/>

                <div data-testid='tickerInformation'
                    className={'tickerComponent'}
                    onClick={handleOpenDialog}>
                    <div>
                        <div>
                            <Badge badgeContent={ticker.tickerName} color="primary"/>
                        </div>
                        <h3 className={'tickerComponentFulName'}>{ticker.tickerFullName}</h3>
                    </div>

                    <div className={'tickerComponentData'}>
                        <h3>{ticker.price} $</h3>
                        <TickerChangeComponent good={ticker.change_good} change={ticker.change}/>
                        <TickerChangePercentComponent good={ticker.change_good} changePercent={ticker.change_percent}/>
                    </div>
                </div>
            </div>}

            <Button data-testid='buttonTicker' onClick={switchShowTicker}>
                {showTicker ? <RemoveCircleOutlineIcon/> : <AddCircleOutlineIcon/>}
            </Button>

            <TickerDialogComponent
                data-testid='tickerDialog'
                open={openDialog}
                ticker={ticker}
                handleCloseDialog={handleCloseDialog}
            />
        </div>
    );
};

export {
    TickerComponent
};
