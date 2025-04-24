import { createSlice } from "@reduxjs/toolkit";

// cryptoSlice.js
const initialState = {
    assets: [ 
      {
        id: "BTC",
        logo: "btc.png",
        name: "Bitcoin",
        symbol: "BTC",
        price: 64500,
        percentChange1h: 0.5,
        percentChange24h: 2.1,
        percentChange7d: -1.3,
        marketCap: 120000000000,
        volume24h: 3500000000,
        circulatingSupply: 19000000,
        maxSupply: 2100000,
        chart: [64000, 64300, 64500, 64700, 64600, 64500, 64400]
      },
      {
        id: "ETH",
        logo: "eth.png",
        name: "Ethereum",
        symbol: "ETH",
        price: 3200,
        percentChange1h: -0.3,
        percentChange24h: 1.5,
        percentChange7d: -0.7,
        marketCap: 38000000000,
        volume24h: 1900000000,
        circulatingSupply: 12000000,
        maxSupply: 42230002,
        chart: [3100, 3150, 3200, 3220, 3210, 3200, 3190]
      },
      {
        id: "USDT",
        logo: "usdt.png",
        name: "Tether",
        symbol: "USDT",
        price: 1,
        percentChange1h: 0.0,
        percentChange24h: 0.01,
        percentChange7d: 0.02,
        marketCap: 9600000000,
        volume24h: 4200000000,
        circulatingSupply: 9500000000,
        maxSupply: 200004200,
        chart: [1, 1.01, 1.00, 1.00, 0.99, 1.00, 1.00]
      },
      {
        id: "XRP",
        logo: "xrp.png",
        name: "Ripple",
        symbol: "XRP",
        price: 0.57,
        percentChange1h: 0.1,
        percentChange24h: -1.2,
        percentChange7d: -3.4,
        marketCap: 3100000000,
        volume24h: 180000000,
        circulatingSupply: 550000000,
        maxSupply: 100000000,
        chart: [0.55, 0.56, 0.57, 0.58, 0.575, 0.57, 0.56]
      },
      {
        id: "BNB",
        logo: "bnb.png",
        name: "BNB",
        symbol: "BNB",
        price: 410,
        percentChange1h: -0.2,
        percentChange24h: 0.8,
        percentChange7d: 2.0,
        marketCap: 6300000000,
        volume24h: 120000000,
        circulatingSupply: 15300000,
        maxSupply: 200000000,
        chart: [400, 405, 410, 412, 411, 410, 409]
      }
    ]
  };
  
 const cryptoSlice = createSlice(
    {
        name:"crypto",
        initialState,
        reducers: {
            updateAssets: (state) => {
              state.assets = state.assets.map(asset => {
                const randomChange = (value, percent = 1) => {
                  const change = (Math.random() * 2 - 1) * percent;
                  return +(value * (1 + change / 100)).toFixed(2);
                };
        
                return {
                  ...asset,
                  price: randomChange(asset.price, 1),
                  percentChange1h: +(Math.random() * 2 - 1).toFixed(2),
                  percentChange24h: +(Math.random() * 4 - 2).toFixed(2),
                  percentChange7d: +(Math.random() * 6 - 3).toFixed(2),
                  volume24h: randomChange(asset.volume24h, 2)
                };
              })
            }
        }
    }
 )

 export const {updateAssets} = cryptoSlice.actions

 export default cryptoSlice.reducer