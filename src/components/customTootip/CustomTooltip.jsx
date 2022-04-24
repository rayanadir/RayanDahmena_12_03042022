import React from 'react';
import '../customTootip/CustomTooltip.scss'
import PropTypes from 'prop-types';

/**
 * @class
 * @classdesc CustomTooltip class component, renders a tooltip
 */
class CustomTooltip extends React.Component{
    /**
     * Renders a tooltip
     * @returns { HTMLElement }
     */
    render(){
        const {payload,active}=this.props;
        if(active && payload){  
            return <div className='tooltip'><p className='value'>{payload[0].value} min</p></div> 
        }
        return null;
    }
}

CustomTooltip.propTypes={
    payload:PropTypes.array,
    active:PropTypes.bool
}
    
export default CustomTooltip