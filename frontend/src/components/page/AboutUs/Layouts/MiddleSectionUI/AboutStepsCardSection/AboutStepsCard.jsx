import React from 'react'

//import css
import "./AboutStepsCard.css";

const AboutStepsCard = () => {
    return (
        <section className='stepCardsSection'>
            <div className='stepCards'>
                <h1>01</h1>
                <h3>Add transaction</h3>
                <p>Enter the amount, category and date. Income or expense.</p>
            </div>
            <div className='stepCards'>
                <h1>02</h1>
                <h3>Monitor in real time</h3>
                <p>The dashboard updates automatically — balance, graphs, history.</p>
            </div>
            <div className='stepCards'>
                <h1>03</h1>
                <h3>Analyze & Customize</h3>
                <p>Filter, change currency, get insights when you need them.</p>
            </div>
        </section>
    )
}

export default AboutStepsCard