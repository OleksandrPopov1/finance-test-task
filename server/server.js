'use strict';
const express = require('express');
const http = require('http');
const io = require('socket.io');
const cors = require('cors');

const FETCH_INTERVAL = 5000;
const PORT = process.env.PORT || 4000;

const tickers = [
    {tickerName: 'AAPL', tickerFullName: 'Apple', lastResults: []},
    {tickerName: 'GOOGL', tickerFullName: 'Alphabet', lastResults: []},
    {tickerName: 'MSFT', tickerFullName: 'Microsoft', lastResults: []},
    {tickerName: 'AMZN', tickerFullName: 'Amazon', lastResults: []},
    {tickerName: 'FB', tickerFullName: 'Facebook', lastResults: []},
    {tickerName: 'TSLA', tickerFullName: 'Tesla', lastResults: []}
    // 'AAPL', // Apple
    // 'GOOGL', // Alphabet
    // 'MSFT', // Microsoft
    // 'AMZN', // Amazon
    // 'FB', // Facebook
    // 'TSLA', // Tesla
];

function randomValue(min = 0, max = 1, precision = 0) {
    const random = Math.random() * (max - min) + min;
    return +random.toFixed(precision);
}

function utcDate() {
    const now = new Date();
    return new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
}

function updateLastResults(ticker, newPrice) {
    if (ticker.lastResults.length > 49) {
        ticker.lastResults.shift();
    }

    ticker.lastResults.push(newPrice);
    return ticker.lastResults;
}

function getQuotes(socket) {

    const quotes = tickers.map(ticker => {
        const newQuote = {
            tickerName: ticker.tickerName,
            tickerFullName: ticker.tickerFullName,
            exchange: 'NASDAQ',
            price: randomValue(100, 300, 2),
            change: randomValue(0, 200, 2),
            change_percent: randomValue(0, 1, 2),
            change_good: Math.random() < 0.5,
            dividend: randomValue(0, 1, 2),
            yield: randomValue(0, 2, 2),
            last_trade_time: utcDate(),
        }

        newQuote.last_results = updateLastResults(ticker, newQuote.price);

        return newQuote;
    });

    socket.emit('ticker', quotes);
}


function trackTickers(socket) {
    // run the first time immediately
    getQuotes(socket);

    // every N seconds
    const timer = setInterval(function () {
        getQuotes(socket);
    }, FETCH_INTERVAL);

    socket.on('disconnect', function () {
        clearInterval(timer);
    });
}

const app = express();
app.use(cors());
const server = http.createServer(app);

const socketServer = io(server, {
    cors: {
        origin: "*",
    }
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

socketServer.on('connection', (socket) => {
    socket.on('start', () => {
        trackTickers(socket);
    });
});

server.listen(PORT, () => {
    console.log(`Streaming service is running on http://localhost:${PORT}`);
});
