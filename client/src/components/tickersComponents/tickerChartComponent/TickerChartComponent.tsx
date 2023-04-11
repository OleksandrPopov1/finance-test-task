import {FC} from "react";
import Paper from '@mui/material/Paper';
import {ArgumentAxis, ValueAxis, Chart, LineSeries, Tooltip} from '@devexpress/dx-react-chart-material-ui';
import {EventTracker} from '@devexpress/dx-react-chart';

import './TickerChartComponent.css';
import {IChartData} from "../../../interfaces";

interface IProps {
    lastResults: number[];
}

const TickerChartComponent: FC<IProps> = ({lastResults}) => {

    const data: IChartData[] = lastResults.map((value, index) => ({value, argument: index + 1}));

    return (
        <Paper className={'tickerChartComponent'}>
            <Chart data={data} height={300}>
                <ArgumentAxis/>
                <ValueAxis/>
                <LineSeries valueField='value' argumentField='argument' color='green'/>
                <EventTracker/>
                <Tooltip/>
            </Chart>
        </Paper>
    );
};

export {
    TickerChartComponent
};
