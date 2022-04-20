import '../charts/Charts.scss';
import React from 'react';
import Chart from '../../components/chart/Chart';
import ApiData from '../../models/ApiData';

class Charts extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            sessions:{},
            performance:{},
            score:{},
            loading_sessions:true,
            loading_performance:true,
            loading_score:true,
        }
    }
    componentDidMount = () => {
        ApiData.getUserAverageSessions(this.state.id)
        .then((res)=>{this.setState(
            {sessions:res.data.sessions,
            loading_sessions:false})});
        ApiData.getUserPerformance(this.state.id)
        .then((res)=>{this.setState(
            {performance:res.data,
            loading_performance:false})});
        ApiData.getUserMainData(this.state.id)
        .then((res)=>{this.setState(
            {score:res.data.score || res.data.todayScore,
            loading_score:false})});
    }
    render(){
        return this.state.loading_sessions === false && this.state.loading_performance===false && this.state.loading_score===false ? 
        (
            <div className="charts">
                <Chart type="average_sessions" value={this.state.sessions}/>
                <Chart type="performance" value={this.state.performance} />
                <Chart type="score" value={this.state.score} />
            </div>
        )
        :(
            <div></div>
        )
    }
}

export default Charts