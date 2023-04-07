import {createSlice} from "@reduxjs/toolkit";

import {ITicker} from "../../interfaces";


interface IState {
    errorsTicker: string | null;
    socketConnect: boolean;
    tickers: ITicker[];
}

const initialState: IState = {
    errorsTicker: null,
    socketConnect: false,
    tickers: []
};


const tickerSlice = createSlice({
    name: 'tickerSlice',
    initialState,
    reducers: {
        setTickers: (state, action) => {
            state.tickers = action.payload;
        },
        changeConnect: (state, action) => {
            state.socketConnect = action.payload;
        }
    }
});

const {
    reducer: tickerReducer,
    actions: {
        setTickers,
        changeConnect
    }
} = tickerSlice;

const tickerAction = {
    setTickers,
    changeConnect
};

export {
    tickerReducer,
    tickerAction
};
