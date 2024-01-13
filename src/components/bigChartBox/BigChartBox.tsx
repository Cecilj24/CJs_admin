import './bigChart.scss'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, Tooltip, CartesianGrid, Area } from 'recharts'


const data = [
    {
        name: 'Mon:',
        Electronics: 4000,
        Digital: 2400,
        clothes: 2400,
    },
    {
        name: 'Tues:',
        Electronics: 3000,
        Digital: 1398,
        clothes: 2210,
    },
    {
        name: 'Wed:',
        Electronics: 2000,
        Digital: 9800,
        clothes: 2290,
    },
    {
        name: 'Thurs:',
        Electronics: 2780,
        Digital: 3908,
        clothes: 2000,
    },
    {
        name: 'Fri:',
        Electronics: 1890,
        Digital: 4800,
        clothes: 2181,
    },
    {
        name: 'Sat:',
        Electronics: 2390,
        Digital: 3800,
        clothes: 2500,
    },
    {
        name: 'Sun:',
        Electronics: 3490,
        Digital: 4300,
        clothes: 2100,
    },
];

const BigChartBox = () => {
    return (
        <div className='bigChartBox'>
            <h1>Revenue Analytics</h1>
            <div className="chart">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        width={500}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Electronics" stackId="1" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="Digital" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                        <Area type="monotone" dataKey="clothes" stackId="1" stroke="#ffc658" fill="#ffc658" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BigChartBox