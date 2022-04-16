import React from "react";
import '../lateral-bar/LateralBar.scss';
import yoga from '../../assets/yoga.png';
import swim from '../../assets/swim.png'
import bike from '../../assets/bike.png';
import dumbbell from '../../assets/dumbbell.png'

const LateralBar = () => {
    const year= new Date().getFullYear()
    return(
        <React.StrictMode>
            <section className="header lateral">
            <nav className="header__vertical">
                <ul className="header__icons">
                    <li className="header__icon"><img src={yoga} alt="yoga" /></li>
                    <li className="header__icon"><img src={swim} alt="swim" /></li>
                    <li className="header__icon"><img src={bike} alt="bike" /></li>
                    <li className="header__icon"><img src={dumbbell} alt="dumbbell" /></li>
                </ul>
                <p className="header__copyrights">Copiryght, SportSee {year}</p>
            </nav>
            </section>
        </React.StrictMode>
    )
}

export default LateralBar