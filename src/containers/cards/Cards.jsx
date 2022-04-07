import React from "react";
import './Cards.scss';
import Card from "../../components/card/Card";

const Cards = () => {
    return(
        <section className="cards">
            <Card type="Calories" value={2500}/>
            <Card type="Glucides" value={150} />
            <Card type="Lipides" value={120} />
            <Card type="Proteines" value={90} />
        </section>
    )
}

export default Cards