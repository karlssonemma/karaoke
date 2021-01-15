import React from 'react';
import styled from 'styled-components';


const Skeleton = styled.div`
    background-color: #e6e6e6;
    margin: 10px 0;
    border-radius: 4px;

    &.text {
        width: 50%;
        height: 12px;
    }

    &.avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
`;


function SkeletonElement({ type }) {

    const classes = `${type}`;

    return(
            <Skeleton className={classes} />
    )
}

export default SkeletonElement;