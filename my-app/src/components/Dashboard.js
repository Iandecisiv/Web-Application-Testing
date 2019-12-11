import React from 'react';
import styled from 'styled-components';

export default function Dashboard(props){
    const Butt = styled.button`
        width: 10%
        background-color: white;
        color: black;
        height: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        font-size: 1.3rem;
        font-family: 'Roboto Mono', monospace;
    `;

    const Butts = styled.div`
        width: 90%;
        margin-left: 5%;
        background-color: black;
        display: flex;
        justify-content: space-around;
    `;

    return(
        <Butts>
            <Butt className="butt" onClick={props.hit}>Hit</Butt>
            <Butt className="butt" onClick={props.strike}>Strike</Butt>
            <Butt className="butt" onClick={props.ball}>Ball</Butt>
            <Butt className="butt" onClick={props.foul}>Foul</Butt>
        </Butts>
    )
}