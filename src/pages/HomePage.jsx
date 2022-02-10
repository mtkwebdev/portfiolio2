import React from 'react'
import styled from 'styled-components'
import WebSearchLogo from '../static/img/websearchLogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function HomePage() {

    const IntroSection = styled.header`

    `

    const TopBar = styled.div`
        .leftSection{}
        .rightSection{}
        .buttonGrid{}
        .blueButton{}
    `

    const MidSeciton = styled.div`
        position:relative;
        display:flex;
        flex-direction:column;
        margin:0px;
        padding:0px;

        
        .logoArea{

            }
        .searchBar{
            .magnifyingGlass{}
            .typingEffec{}
        }
        .greyButtons{}
    
    `

    const Logo = styled.img`
        position:relative;
        display:flex;
        flex-direction:column;
        margin: 30vh auto 0px auto;
        width:25%;
        height: auto;
        object-fit:contain;
   `
    
   const SearchBar = styled.div`
    display:flex;
    margin: 10px auto;
    width: 35rem;
    height: auto;
    ${'' /* padding:15px; */}
    border-radius: 2em;
    border: 1px solid rgba(0,0,0,0.2);
    background:none;

    span{
        z-index:1;
    }

    input{
        margin-left:20px;
        width:90%;
        padding:15px;
        font-size:1.2rem;
        border:none;
        outline: none;
        background:none;
    }
    &:hover{
        border: none;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
   `
  return (
      <>
        <IntroSection>
            <TopBar></TopBar>
            <MidSeciton>
                <Logo src={WebSearchLogo}/>
                <SearchBar>
                    <FontAwesomeIcon icon="fas fa-search" />
                    <input autoFocus type="text" />
                </SearchBar>
            </MidSeciton>
        </IntroSection>
      </>

  )
}

export default HomePage