import styled, { css } from 'styled-components'

const Button = styled.button`
    background: rgb(138, 5, 190);
    border-radius: 4px;
    color: white;
    border:none;
    margin: 0 1em;
    padding: 0.50em 1.2em;
    
    :hover {
        color: rgb(138, 5, 190);
        background: white;
    }

  ${
      props => props.primary && css`
        background: palevioletred;
        color: white;

        :hover{
            background: white;
            color: palevioletred;
        }
      ` 
  }

  ${
    props => props.disabled && css`
      background: #f5f5f5;
      color: rgb(138, 5, 190);
    ` 
    }

`

export default Button;