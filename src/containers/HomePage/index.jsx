import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Card from '../../components/Card';
import SkeletonArticle from '../../components/Skeletons/SkeletonArticle';

const Section = styled.section`
    height: 100vh;
    padding: 5em 0;
`;

const List = styled.article`
    width: 80vw;
    height: 200px;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`;

function HomePage() {

    const [url, setUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    fetch('https://reqres.in/api/users?delay=5')
    .then(response => {
        return response.json();
    })
    .then(data => {
        setUrl(data.data);
    })
    .catch(error => {
        console.log(error);
    });

    // useEffect(() => {
    //     setIsLoading(false);
    // }, [url])

    
    // async function getInfo() {
    //     const response = await fetch('https://reqres.in/api/users?delay=3');
    //     const info = await response.json();
    //     console.log(info);
    // }
    
    // getInfo();


    function deletePerson(id) {
        const newState = url.filter(urls => urls.id !== id);
        setUrl(newState);
    }

    function renderPage() {
        return(
            url.map(item => {
                return <Card 
                    first_name={item.first_name}
                    last_name={item.last_name}
                    email={item.email}
                    key={item.id}
                    id={item.id}
                    avatar={item.avatar}
                    deletePerson={deletePerson}
                />
            })
        )
    };

    function renderSkeleton() {
        return(
            <>
                {/* <p>...Loading</p> */}
                {[1,2,3,4,5,6].map((n) => <SkeletonArticle key={n} />)}
            </>
        )
    };

    return(
        <Section>
            <List>
                {
                    (url === null) ? renderSkeleton() : renderPage()
                }
            </List>
            {/* <List>
                {url && renderPage()}
                {!url && renderSkeleton()}
            </List> */}
        </Section>
    )
}

export default HomePage;