import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// TODO: Remove mock data
const data = [
  { name: '1 July', uv: 1 },
  { name: '5 July', uv: 2 },
  { name: '10 July', uv: 1 },
  { name: '15 July', uv: 3 },
  { name: '20 July', uv: 2 },
  { name: '25 July', uv: 4 },
];

export function AreaChartBlock(): JSX.Element {
  return (
    <ResponsiveContainer width="99%" height={120}>
      <AreaChart
        width={400}
        height={110}
        data={data}
        margin={{
          top: 10,
          right: 40,
          left: 50,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="1%" stopColor="#9D9B54" stopOpacity={0.7} />
            <stop offset="100%" stopColor="#9D9B54" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" axisLine={false} tickLine={false} />
        <YAxis hide />
        <Tooltip />
        <Area
          dataKey="uv"
          stroke="#EFEA72"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
