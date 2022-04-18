import React from 'react';
import '../customTootip/CustomTooltip.scss'

class CustomTooltip extends React.Component{
    render(){
        const {payload,active}=this.props;
        if(active && payload){  
            return <div className='tooltip'><p className='value'>{payload[0].value} min</p></div> 
        }
        return null;
    }
}
    
export default CustomTooltip