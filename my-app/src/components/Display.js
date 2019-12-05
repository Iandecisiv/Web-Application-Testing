import React from 'react';
import styled from 'styled-components';

export default function Display(props){
    const Cont = styled.div`
        margin: 5%;
        display: flex;
        justify-content: space-around;
        border: 1px solid black;
        font-family: 'Roboto Mono', monospace;
    `;


    const StrikeCont = styled.div`
    
    `;

    const BallsCont = styled.div`

    `;

    return (
        <Cont>
            <StrikeCont>
                <h1>Strikes: {props.strikes} </h1>
            </StrikeCont>
            <BallsCont>
                <h1>Balls: {props.balls} </h1>
            </BallsCont>
        </Cont>
    )
}