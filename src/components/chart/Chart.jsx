import '../chart/Chart.scss';
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,PieChart, Pie } from 'recharts';
import ApiFormat from '../../models/ApiFormat';

class Chart extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            data:{},
            loading:true,
            type:this.props.type,
            value:this.props.value
        }
    }

    getValue=()=>{
        if(this.state.type==="performance"){
            return ApiFormat.formatUserPerformance(this.state.value);
        }else if(this.state.type==="average_sessions"){

        }else if(this.state.type==="score"){

        }
    }
    
    render(){
        const value=this.getValue();
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