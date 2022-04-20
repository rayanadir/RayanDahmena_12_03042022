import React from "react";
import '../card/Card.scss';
import calorie_icon from '../../assets/keydata_icons/calories-icon.png';
import glucid_icon from '../../assets/keydata_icons/glucid-icon.png';
import lipid_icon from '../../assets/keydata_icons/lipid-icon.png';
import protein_icon from '../../assets/keydata_icons/protein-icon.png';

const Card = (props) => {
    const type=props.type;
    let icon,unit;
    const value=props.value;
    if(type==="Calories"){
        icon=calorie_icon
        unit="kCal";
    }else if(type==="Glucides"){
        icon=glucid_icon;
        unit="g";
    }else if(type==="Lipides"){
        icon=lipid_icon;
        unit="g";
    }else if(type==="Proteines"){
        icon=protein_icon;
        unit="g";
    }
    //console.log(type+" " +value+unit);
    return(
        <div className="card">
            <img src={icon} alt="icon" className="card__icon"/>
            <div className="card__title_value">
                <p className="card__value">{value}{unit}</p>
                <p className="card__title">{type}</p>
            </div>
        </div>
    )
}

export default Card