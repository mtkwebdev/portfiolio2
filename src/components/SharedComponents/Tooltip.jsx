import React, { Children } from 'react'

import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    display: inline-block;

.tooltip{
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
}

`

function Tooltip({text, width, height, position, top, left, right, bottom, color, background, padding, margin}) {
  return (
    <Container className='tooltip'>
        {Children}
        <span>{text}</span>
    </Container>
  )
}

export default Tooltip