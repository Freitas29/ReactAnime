import styled, { css } from 'styled-components'

const Button = styled.button`
    background: rgb(138, 5, 190);
    border-radius: 4px;
    color: white;
    border:none;
    margin: 0 1em;
    padding: 0.50em 1.2em;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    padding: 16px 48px 18px;
    transition-duration: .3s;
    border-width: 0;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;

    transition: all 0.5s ease;
    :hover {
        color: rgb(138, 5, 190);
        background: #f5f5f5;
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


  ${
    props => props.warning && css`
      background: #ff5a5f;
      color: white;

      :hover{
        background: white;
        color: #ff5a5f;      
      }
      
    ` 
  }


  ${
    props => props.dark && css`
      background: rgb(25, 25, 25);
      color: white;

      :hover{
        background: white;
        color: rgb(25, 25, 25);      
      }
      
    ` 
  }
  

`

export default Button;