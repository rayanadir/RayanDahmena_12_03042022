import '../chart/Chart.scss';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis,ResponsiveContainer,PieChart, Pie, LineChart, XAxis, YAxis, Tooltip, Line, Cell } from 'recharts';
import CustomTooltip from '../customTootip/CustomTooltip';
import PropTypes from 'prop-types';

const COLORS=['#FF0000','#FFFFFF']

class Chart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            loading:true,
            type:this.props.type,
            value:this.props.value
        };
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
            const data=[
                {name:'score', value:this.state.value*100},
                {name:'difference', value:(1-this.state.value)*100}
            ]
            return data;
        }
    }
    
    render(){
       const value= this.formatData();
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
                            <PolarAngleAxis dataKey="kind_value" stroke='white' tick={{fontSize:11, fontWeight:500}} tickLine={false} />
                            <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.8} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div> :  
                this.state.type==="score" ? 
                    <div className="chart score">
                        <p className='score__title'>Score</p>
                        <div className="score__value">
                            <p className='score__value_percent'>{value[0].value}%</p>
                            <p className='score__infos'>de votre objectif</p>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie 
                                data={value} 
                                dataKey="value" 
                                innerRadius={80} 
                                outerRadius={90}
                                startAngle={90}
                                endAngle={450}
                                >
                                   {value.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))} 
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div> : "" 
            }
        </React.StrictMode>
        )
    }
}

Chart.propTypes={
    type:PropTypes.string,
    value:PropTypes.oneOfType([PropTypes.array,PropTypes.object,PropTypes.number])
}

export default Chart