import '../chart/Chart.scss';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,PieChart, Pie } from 'recharts';

const Chart = (props) => {
    const type=props.type;
    const AVERAGE_SESSIONS=[
        {
            day: 1,
            sessionLength: 30
        },
        {
            day: 2,
            sessionLength: 23
        },
        {
            day: 3,
            sessionLength: 45
        },
        {
            day: 4,
            sessionLength: 50
        },
        {
            day: 5,
            sessionLength: 0
        },
        {
            day: 6,
            sessionLength: 0
        },
        {
            day: 7,
            sessionLength: 60
        }
    ];
    const USER_PERFORMANCE={
        kind: {
            1: 'cardio',
            2: 'energy',
            3: 'endurance',
            4: 'strength',
            5: 'speed',
            6: 'intensity'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 120,
                kind: 2
            },
            {
                value: 140,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 200,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    } 
    ;
    const score = 0.12;
    return (
        <React.StrictMode>
            {
                type==="average_sessions" ? 
                    <div className="chart average_sessions">

                    </div> : 
                type==="performance" ?
                    <div className="chart performance">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={USER_PERFORMANCE}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey={USER_PERFORMANCE.kind} />
                            <PolarRadiusAxis />
                            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div> :  
                type==="score" ? 
                    <div className="chart score">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                            <Pie data={score} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#FF0000" label />
                            </PieChart>
                        </ResponsiveContainer>
                    </div> : "" 
            }
        </React.StrictMode>
    )
}

export default Chart