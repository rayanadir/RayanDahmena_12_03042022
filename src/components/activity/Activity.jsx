import React from "react";
import '../activity/Activity.scss';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ApiData from "../../models/ApiData";

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
  render(){
    return this.state.loading === true ? (
      <div></div>
    ) : (
      /*<ResponsiveContainer className="activity" width={835} height={320}>
          <BarChart 
            data={this.state.data}
            margin={{
              top: 5,
              right: 30,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis dataKey="kilogram" orientation="right"/>
            <YAxis dataKey="calories" orientation="left" />
            <Tooltip />
            <Legend className="activity__bar"/>
            <Bar dataKey="kilogram" fill="#282D30" barSize={7} radius={[50,50,0,0]}/>
            <Bar dataKey="calories" fill="#E60000" barSize={7} radius={[50,50,0,0]}/>
          </BarChart>
      </ResponsiveContainer>*/
      <div></div>
    )
  }
} 

export default Activity