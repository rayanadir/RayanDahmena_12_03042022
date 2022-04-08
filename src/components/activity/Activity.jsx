import React from "react";
import '../activity/Activity.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Activity = () => {
    const data=[
        {
            day: '2020-07-01',
            kilogram: 80,
            calories: 240
        },
        {
            day: '2020-07-02',
            kilogram: 80,
            calories: 220
        },
        {
            day: '2020-07-03',
            kilogram: 81,
            calories: 280
        },
        {
            day: '2020-07-04',
            kilogram: 81,
            calories: 290
        },
        {
            day: '2020-07-05',
            kilogram: 80,
            calories: 160
        },
        {
            day: '2020-07-06',
            kilogram: 78,
            calories: 162
        },
        {
            day: '2020-07-07',
            kilogram: 76,
            calories: 390
        }
    ]
    return (
        <ResponsiveContainer className="activity">
          <BarChart
            width={100}
            height={100}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis orientation="right"/>
            <Tooltip />
            <Legend className="activity__bar"/>
            <Bar dataKey="kilogram" fill="#282D30"/>
            <Bar dataKey="calories" fill="#E60000" />
          </BarChart>
        </ResponsiveContainer>
      );
} 

export default Activity