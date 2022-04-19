import React from "react";
import '../customActivityTooltip/CustomActivityTooltip.scss'

class CustomActivityTooltip extends React.Component {
    render(){
        const {payload,active}=this.props;
        if(active && payload){
            return(<div className="activityTooltip">
                <p className="activityTooltip__value">{payload[0].value}kg</p>
                <p className="activityTooltip__value">{payload[1].value}kCal</p>
            </div>) 
        }
        return null;
    }
}

export default CustomActivityTooltip