import '../chart/Chart.scss';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,PieChart, Pie } from 'recharts';
import ApiFormat from '../../models/ApiFormat';

class Chart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            loading:true,
            type:this.props.type,
            value:this.props.value
        }
    }

    getData=()=>{
        if(this.state.type==="performance"){
            let performance=[];
            const data=this.state.value.data;
            const kind=this.state.value.kind;
            data.map((element,index)=>{
                const kind_value = kind[index+1].charAt(0).toUpperCase() + kind[index+1].slice(1);
                const value=element.value
                const result={value,kind_value};
                return performance.push(result);
            })
            return performance;
        }else if(this.state.type==="average_sessions"){
            let data=this.state.value;
            const days=['L','M','M','J','V','S','D'];
            let sessions=[];
            data.map((session)=>{
                return sessions.push({
                    day:days[session.day-1],
                    sessionLength:session.sessionLength
                })
            })
            return sessions;
        }else if(this.state.type==="score"){
            return this.state.value;
        }
    }
    
    render(){
       const value= this.getData();
       console.log(value);
        return (
            <div></div>
        )
        /*return (
        <React.StrictMode>
            {
                this.state.type==="average_sessions" ? 
                    <div className="chart average_sessions">

                    </div> : 
                this.state.type==="performance" ?
                    <div className="chart performance">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={this.state.value}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey={this.state.value} />
                            <PolarRadiusAxis />
                            <Radar dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div> :  
                this.state.type==="score" ? 
                    <div className="chart score">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                            <Pie data={this.state.value} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#FF0000" label />
                            </PieChart>
                        </ResponsiveContainer>
                    </div> : "" 
            }
        </React.StrictMode>
        )*/
    }
    
}

export default Chart