import React from 'react';
import styled, { keyframes } from 'styled-components';

function Shimmer() {

    const move = keyframes`
        from {
            transform: translateX(-150%)
        }
        to {
            transform: translateX(150%);
        }
    `;

    const ShimmerWrapper = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        animation: ${move} 1.5s linear infinite; 
        overflow: hidden;
    `;

    const Shimmer = styled.div`
        width: 50%;
        height: 100%;
        background-color: rgba(255,255,255,0.2);
        transform: skewX(-20deg);
        box-shadow: 0 0 30px 30px rgba(255,255,255,0.05);
    `;

    return(
        <ShimmerWrapper>
            <Shimmer />
        </ShimmerWrapper>
    )
}

export default Shimmer;