import React from 'react';
import '../dashboard/Dashboard.scss'
import Welcome from '../../containers/welcome/Welcome';
import Activity from '../../components/activity/Activity';
import Charts from '../../containers/charts/Charts';
import Cards from '../../containers/cards/Cards';
import { useParams } from 'react-router-dom';

/**
 * Creates app dashboard
 * @returns { HTMLElement }
 */
const Dashboard = () => {
    let {id} = useParams();
    return (
        <div className="wrap">
            <Welcome id={id}/>
            <section className='activity_charts_cards'>
                <div className="activity_charts">
                    <Activity id={id} />
                    <Charts id={id}/>
                </div>
                <Cards id={id}/>
            </section>
        </div>
    )
}

export default Dashboard