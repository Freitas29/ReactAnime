import styled, { css } from 'styled-components'


export const Alert = styled.div`
    padding: .75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    
    ${
        props => props.warning && css`
            background-color: #ff5a5f;
            color: white;
            position: relative;
        `
    }
` 