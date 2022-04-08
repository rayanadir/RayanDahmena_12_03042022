import './Welcome.scss'
import React from 'react'

const Welcome = () => {
    const name="Thomas";
    const message="Félicitations ! Vous avez explosé vos objectifs hier 👏";
    return(
        <section className="welcome">
            <div className="welcome__hello_container">
                <h2 className="welcome__hello">Bonjour</h2>
                <h2 className="welcome__name">{name}</h2>
            </div>
            <p className="welcome__message">{message}</p>
        </section>
    )
}

export default Welcome