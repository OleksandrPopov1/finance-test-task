export interface ITicker {
    tickerName: string;
    tickerFullName: string;
    exchange: string;
    price: number;
    change: number;
    change_percent: number;
    change_good: boolean;
    dividend: number;
    yield: number;
    last_results: number[];
    last_trade_time: string;
}
