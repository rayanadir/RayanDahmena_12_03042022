import '../charts/Charts.scss';
import React from 'react';
import Chart from '../../components/chart/Chart';

const Charts = () => {
    return (
        <div className="charts">
            <Chart type="average_sessions"/>
            <Chart type="performance"/>
            <Chart type="score" />
        </div>
    )
}

export default Charts