import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export const CryptoChart = ({ data }) => {
  const chartData = data.chart.map((price, index) => ({
    time: `T${index + 1}`,
    price
  }));

  return (
    <ResponsiveContainer width="80%" height={60}>
      <LineChart data={chartData}>
        <XAxis dataKey="time" hide />
        <YAxis domain={['auto', 'auto']} hide />
        <Tooltip  contentStyle={
            {
                backgroundColor:"transparent",
                border:'none',
                fontSize:'12px',
                padding:'4px 8px',
                color:"blue"
            }
        }
         cursor={{
            stroke:"#8884d8",
            strokeWidth:1,
         }}
        />
        <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};