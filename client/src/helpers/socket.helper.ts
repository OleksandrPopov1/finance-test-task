import {socket} from "../services";
import {AppDispatch, tickerAction} from "../redux";
import {ITicker} from "../interfaces";


export const socketOn = (dispatch: AppDispatch): void => {

    const setNewTickers = (payload: ITicker[]) => {
        dispatch(tickerAction.setTickers(payload));
    }

    socket.on('connect', () => dispatch(tickerAction.changeConnect(true)));
    socket.on('disconnect', () => dispatch(tickerAction.changeConnect(false)));
    socket.emit('start');
    socket.on('ticker', setNewTickers);
};

export const socketOff = (dispatch: AppDispatch): void => {

    const setNewTickers = (payload: ITicker[]) => {
        dispatch(tickerAction.setTickers(payload));
    }

    socket.off('connect', () => dispatch(tickerAction.changeConnect(true)));
    socket.off('disconnect', () => dispatch(tickerAction.changeConnect(false)));
    socket.off('ticker', setNewTickers);
};
