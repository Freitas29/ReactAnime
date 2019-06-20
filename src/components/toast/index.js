import styled, {css} from 'styled-components'

export const Toast = styled.div`
    position: absolute;
    display: flex;
    z-index: 999;
    background-color: #EF476F;
    width: 25%;
    border-radius: 6px;
    height: 12vh;
    align-items: center;
    justify-content: center;
    transition: all 2s;
    
    p{
        color: white !important;
        font-size: 15px !important;
        font-weight: bold
    }

`