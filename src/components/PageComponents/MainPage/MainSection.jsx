import React from 'react'
import styled from 'styled-components'
import ProjectsCanvas from '../../threeFiberComponents/ProjectsCanvas'
import Introduction from './prismicContent/Introduction'

function MainSection() {

    const MainSection = styled.main`
            ${'' /* position:relative; */}
            display:block;
            flex-direction: row;
            margin: 4em auto;
            width:90vw;
`

  return (
      <>
          
    <ProjectsCanvas width={"100vw"} height={"100vh"} margin={"120vh 0px 0px 0px"}/>
    <MainSection>
        <Introduction/>
    </MainSection>
      </>
  )
}

export default MainSection