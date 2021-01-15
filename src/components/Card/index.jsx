import React from 'react';
import styled from 'styled-components';

const Person = styled.div`
    width: auto;
    height: 300px;
    padding: 1em;
    border-radius: 10px;
   
    box-shadow: 0px 0px 10px lightgray;

    display: flex;
    flex-direction: column;
    aling-items: center;
`;

const Avatar = styled.img`
    width: 100px;
`; 

// const Skeleton = styled.div`
//     background-repeat: no-repeat;
//     background-image: radial-gradient(circle 16px, white 99%, transparent 0);
//     background-size: 32px 32px;
// `;

function Card(props) {
    
    return(

        <Person>
            <Avatar src={props.avatar}></Avatar>
            <p>{props.first_name} {props.last_name}</p>
            <p>{props.email}</p>
        </Person>

    )
}

export default Card;