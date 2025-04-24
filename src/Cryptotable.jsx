import React from 'react';
import { useSelector } from 'react-redux';
import { CryptoChart } from './Linechart';

const CryptoTable = () => {
  const assets = useSelector(state => state.crypto.assets);

  return (
    <div className=" p-4 bg-gradient-to-br from-slate-500 to-gray-800 h-screen ">

      <h2 className='text-3xl font-bold text-center mb-10 text-white/80'>Crypto Table</h2>


      <div className='overflow-x-auto flex lg:justify-center'>  
       <table className="w-auto border text-sm text-left p-4 shadow-2xl">
         <thead className="bg-white/50 text-gray-700 h-10" >
           <tr className='my-2'>
                <th >
                    <div className='table-heading'>Index</div>
                </th>
                <th>
                    <div className='table-heading'>Logo</div>
                </th>
                <th>
                    <div className='table-heading'>Name</div>
                </th>
                <th>
                    <div className='table-heading'>Symbol</div>
                </th>
                <th>
                    <div className='table-heading'>Price</div>
                </th>
                <th>
                    <div className='table-heading'>1H %</div>
                </th>
                <th>
                    <div className='table-heading'>24H %</div>
                </th>
                <th>
                    <div className='table-heading'>7D %</div>
                </th>
                <th>
                    <div className='table-heading'>Market Cap</div>
                </th>
                <th>
                    <div className='table-heading'>24H Volume</div>
                </th>
                <th>
                    <div className='table-heading'>Circulating Supply</div>
                </th>
                <th>
                    <div className='table-heading'>Max Supply</div>
                </th>
                <th>
                    <div className='table-heading'>7Day chart</div>
                </th>
            </tr>
        </thead>
        <tbody className='bg-white font-semibold'>
          {assets.map((asset, index) => (
            <tr key={asset.id} className="border-b h-10">
              <td className=''>
                <div className='mx-3  text-center'>{index + 1}</div>
              </td>
              <td className=''>
                <div className='flex items-center justify-center'>
                <img src={`/logos/${asset.logo}`} alt={asset.symbol} className="w-6 h-6" />
                </div>
              </td>
              <td className='font-bold'>
                <div className='mx-2'>{asset.name}</div>
              </td>
              <td>
                <div className='mx-4'>{asset.symbol}</div>
              </td>
              <td>
                <div className='mx-2 w-20'>${asset.price.toLocaleString()}</div>
              </td>
              <td className={asset.percentChange1h >= 0 ? 'text-green-500' : 'text-red-500'}>
                <div className='mx-2 w-12'>{asset.percentChange1h}%</div>
              </td>
              <td className={asset.percentChange24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                <div className='mx-2 w-12'>{asset.percentChange24h}%</div>
              </td>
              <td className={asset.percentChange7d >= 0 ? 'text-green-500' : 'text-red-500'}>
                <div className='mx-2 w-12'>
                {asset.percentChange7d}%
                </div>
              </td>
              <td>
                <div className='mx-2'>${(asset.marketCap / 1e9).toFixed(2)}B</div>
              </td>
              <td>
                <div className='mx-2'>
                ${(asset.volume24h / 1e9).toFixed(2)}B
                </div>
              </td>
              <td>
                <div className='mx-2'>
                 ${asset.circulatingSupply.toLocaleString()}
                </div>
              </td>
              <td>
                <div className='mx-2'>
                ${asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}
                </div>
              </td>
              <td>
                <CryptoChart data={asset} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default CryptoTable;