# Crypto Price Tracker

A responsive, real-time cryptocurrency price tracker built using **React** and **Redux Toolkit**, simulating WebSocket updates. Inspired by platforms like CoinMarketCap, it displays detailed stats of five major cryptocurrencies including BTC, ETH, USDT, XRP, and BNB.

---

## Features

- Real-time data simulation (price, volume, and % changes every 1–2 seconds)
- Redux Toolkit for global state management
- Fully responsive and accessible data table
- Color-coded % changes (green for positive, red for negative)
- Static 7-day mini chart preview
- Clean UI with efficient performance using selectors

---

## Tech Stack

- **React** — Frontend framework for UI components
- **Redux Toolkit** — State management using `createSlice` and `configureStore`
- **React-Redux** — Hooks like `useSelector` and `useDispatch`
- **CSS / Tailwind CSS (if used)** — For responsive and aesthetic styling
- **setInterval** — To simulate WebSocket updates
- **rechart library for charts** — Static 7-day graph visualization

---

---

## How it Works

- Crypto data (5 assets) is stored in Redux state.
- `setInterval` runs every 1-2 seconds to randomly change:
  - Price
  - 1h, 24h, 7d percentage changes
  - 24h trading volume
- Redux actions are dispatched to update state globally.
- `useSelector` is used to access and re-render only required data.

---

## Getting Started

Clone and run the project locally:

```bash
git clone https://github.com/your-username/crypto-price-tracker.git
cd crypto-price-tracker
npm install
npm run dev

## Demo Video 

<video src="demo.mp4" controls width="100%"></video>

this will not play video kindly please download "demo.mp4" file to see demo

