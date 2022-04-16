import React from "react";
import './Cards.scss';
import Card from "../../components/card/Card";
import ApiData from "../../models/ApiData";

class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state={
            id:this.props.id,
            data:{},
            loading:true,
          }
    }
    componentDidMount=()=>{
        ApiData.getUserMainData(this.state.id).then((res)=>{this.setState({data:res.data.keyData,loading:false})})
    }
    render(){
        return this.state.loading=== true ? (
            <div></div>
        ):
        (
            <section className="cards">
                <Card type="Calories" value={this.state.data.calorieCount}/>
                <Card type="Glucides" value={this.state.data.proteinCount} />
                <Card type="Lipides" value={this.state.data.carbohydrateCount} />
                <Card type="Proteines" value={this.state.data.lipidCount} />
            </section>
        )
    }  
}

export default Cards