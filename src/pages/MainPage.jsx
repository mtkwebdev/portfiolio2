import React from 'react';
import styled from 'styled-components';
import TopSection from '../components/PageComponents/MainPage/TopSection'
import MainSection from '../components/PageComponents/MainPage/MainSection'


const Container = styled.section`
    display:block;
    flex-direction: row;
`


function MainPage() {
  return (
    <Container>  
    <header>
        <TopSection/>   
    </header>
    <main>
        <MainSection/>
    </main>
    </Container>
  )
}

export default MainPage;
