import '../chart/Chart.scss';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,ResponsiveContainer,PieChart, Pie, LineChart, XAxis, YAxis, Tooltip, Line, Label } from 'recharts';
import CustomTooltip from '../customTootip/CustomTooltip';

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

    formatData=()=>{
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
       const value= this.formatData();
       console.log(value);
        return (
        <React.StrictMode>
            {
                this.state.type==="average_sessions" ? 
                    <div className="chart average_sessions">
                        <p className='average_sessions_text'>Durée moyenne des sessions</p>
                        <ResponsiveContainer width="100%" height="100%"> 
                            <LineChart
                            data={value}
                            margin={{
                                top: 0,
                                right: 10,
                                left: 10,
                                bottom: 5,
                            }}
                            >
                            <XAxis dataKey="day" tickLine={false} axisLine={false} stroke="white" style={{opacity:"0.5"}} />
                            <YAxis hide={true} domain={[0,'dataMax + 40']} />
                            <Tooltip content={<CustomTooltip />}/>
                            <Line type="monotone" dataKey="sessionLength" stroke="white" style={{opacity:"0.5"}} strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div> : 
                this.state.type==="performance" ?
                    <div className="chart performance">
                        <ResponsiveContainer width="100%" height="80%" className="radar">
                            <RadarChart outerRadius="80%" data={value} >
                            <PolarGrid radialLines={false}/>
                            <PolarAngleAxis dataKey="kind_value" stroke='white' tick={{fontSize:11}} tickLine={false} />
                            <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.8} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div> :  
                this.state.type==="score" ? 
                    <div className="chart score">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie 
                                data={this.state.value} 
                                dataKey="value" 
                                innerRadius={70} 
                                outerRadius={90} 
                                fill="#FF0000"
                                startAngle={90} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div> : "" 
            }
        </React.StrictMode>
        )
    }
    
}

export default Chart