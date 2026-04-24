import React from 'react'

//import css
import "./AboutCardSection.css";
//import css
import styled from "styled-components";



const AboutCardSection = () => {
    return (
        <section className='cardSection'>
            <div className='Card'>
                <p>💰</p>
                <h3>Income and expenses</h3>
                <p>Add transactions by category and monitor the flow of money.</p>
            </div>
            <div className='Card'>
                <p>📊</p>
                <h3>Visual graphs</h3>
                <p>Pie charts, bar charts, statistics — all on the dashboard.</p>
            </div>
            <div className='Card'>
                <p>💱</p>
                <h3>Multi-currency</h3>
                <p>Default currency is set on SEK.</p>
                <p>Possibility to convert to other currencies EUR, USD or 150+ currencies.</p>
            </div>
            <div className='Card'>
                <p>🔍</p>
                <h3>Filter & search</h3>
                <p>Filter by category, date, or search for transactions.</p>
            </div>
        </section>
    )
}

export default AboutCardSection