import React from 'react';
import styled from 'styled-components';
import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement'


function SkeletonArticle(props) {

    const SkeletonWrapper = styled.div`
        height: 300px;
        padding: 1em;
        border-radius: 10px;
        box-shadow: 0px 0px 10px lightgray;
        `;

    return(
        <SkeletonWrapper>
            <div>
                <SkeletonElement type='avatar' />
                <SkeletonElement type='text' />
                <SkeletonElement type='text' />
            </div>
            <Shimmer />
        </SkeletonWrapper>
    )
}

export default SkeletonArticle;