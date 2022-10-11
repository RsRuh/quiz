import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const dataLoad = useLoaderData();
    const data = dataLoad.data;
    return (
        <div className='w-auto'>
            <div>
            <LineChart width={800} height={600} data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
            </div>
        </div>
    );
};

export default Statistics;