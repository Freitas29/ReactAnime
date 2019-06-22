import styled, {css} from 'styled-components'


export const Input = styled.input`

            width: 100%;
            font-size: 17px;
            line-height: 1.5;
            color: #fff;
            background-color: #044fa2;
            border: 10px solid #044fa2;
            font-weight: bold;
            border-radius: 50px;
            margin: 1rem;
            transition: all 0.5s ease;
            outline: none;
            height: 48px;
            padding: 1em;

            :focus{
                border: 3px solid #fff;
            }
    
            ${
            props => props.noBorderPrimaryMd && css`
                border:none;
                font-weight: 100;
                font-size: 12px
                width: 90%;
                border-bottom: 0.1px solid #ddd;
                background-color: transparent;
                color: #fff;
                border-radius: 0%;
                
            :focus{
                    border:none;
                    border-bottom: 0.1px solid #ddd;
                }
            ` 
            }


    ${
    props => props.dark && css`
      background-color: rgb(25,25,25);
      border: 10px solid rgb(25,25,25);
      color: #fff;
        
      

      :focus{
                border-bottom: 3px solid #fff;
        }
    ` 
    }

    

    ${
        props => props.warning && css`
        background-color: #ff5a5f;
        border: 10px solid #ff5a5f;
        color: #fff;

        :focus{
                border-bottom: 3px solid #fff;
        }

        ${ props => props.sm && css`
            width: 20%;
        `}

        ${ props => props.md && css`
            width: 40%;
        `}
    ` 
    }


`