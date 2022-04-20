import './Welcome.scss'
import React from 'react'
import ApiData from '../../models/ApiData';
import PropTypes from 'prop-types';

class Welcome extends React.Component {
  
    constructor(props){
        super(props)
        this.state={
            id:this.props.id,
            data:{},
            loading:true,
        } 
    }

    componentDidMount=()=>{
        ApiData.getUserMainData(this.state.id).then((res)=> {this.setState({data:res.data,loading:false})});
    }
    
    render(){
    const message = "Félicitations ! Vous avez explosé vos objectifs hier 👏";
    return this.state.loading === true ?
    (<div></div>):
    (    
        <section className="welcome">
            <div className="welcome__hello_container">
                <h2 className="welcome__hello">Bonjour</h2>
                <h2 className="welcome__name">{this.state.data.userInfos.firstName}</h2>
            </div>
            <p className="welcome__message">{message}</p>
        </section>
    )
    }
}

Welcome.propTypes={
    id:PropTypes.string,
}

export default Welcome