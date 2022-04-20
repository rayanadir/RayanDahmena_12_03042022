import React from "react";
import '../activity/Activity.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';
import ApiData from "../../models/ApiData";
import CustomActivityTooltip from "../customActivityTooltip/CustomActivityTooltip";

class Activity extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id:this.props.id,
      data:{},
      loading:true,
    }
  }
  
  componentDidMount=()=>{
    ApiData.getUserActivity(this.state.id).then((res)=> {this.setState({data:res.data,loading:false})});
  }

  getData=()=> {
    let data=[];
    this.state.data.sessions.map((element,index)=>{
      let day=index+1;
      const kilogram=element.kilogram;
      const calories=element.calories;
      return data.push({day,kilogram,calories});
    })
    return data;
  }

  render(){
    return this.state.loading === true ? (
      <div></div>
    ) : (
      <section className="activity">
        <p className="activity__daily">Activité quotidienne</p>
        <BarChart data={this.getData()} width={835} height={320} margin={{top: 20,right: 0,left: 0,bottom: 5}} >
            <CartesianGrid strokeDasharray="3 3" vertical={false}/>
            <XAxis dataKey="day" tickLine={false} />
            <YAxis orientation="right" yAxisId="right" tickLine={false} axisLine={false} domain={['dataMin - 1','dataMax + 1']}/>
            <YAxis orientation="left" yAxisId="left" domain={['dataMin - 50','dataMax + 50']} hide={true}/>
            <Tooltip content={<CustomActivityTooltip />}/>
            <Legend align="right" verticalAlign="top" height={50} iconType="circle" />
            <Bar dataKey="kilogram" name="Poids (kg)" yAxisId="right" fill="#282D30" barSize={7} radius={[50,50,0,0]}/>
            <Bar dataKey="calories" name="Calories brûlées (kCal)" yAxisId="left" fill="#E60000" barSize={7} radius={[50,50,0,0]}/>
          </BarChart>
      </section>
          
    )
  }
} 

export default Activity