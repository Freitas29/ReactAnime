import styled, {css} from 'styled-components'


export const TextArea = styled.textarea`
            font-size: 12px;
            color: rgba(0,0,0,.54) !important;
            line-height: 20px;
            padding: 3px 6px;
            letter-spacing: 0;
            width: 100%;
            background-color: #fff;
            border: 0.5px solid #f3575e !important;
            text-transform: uppercase;
            border-radius: 50px;
            margin: 1rem;
            transition: all 0.5s ease;
            outline: none;
            height: 48px;
            padding: 1em;
            font-size: 20px;
            font-style: normal;
            font-weight: initial !important;

            ::placeholder{
                color: #ddd;
            }

            :focus{
                box-shadow: 0px 0px 1px 1px #f3575e;
                
            }
    
`

export const Input = styled.input`

            width: 100%;
            font-size: 17px;
            line-height: 1.5;
            color: #fff;
            background-color: #fff;
            border: 0.5px solid #f3575e;
            border-radius: 50px;
            margin: 1em 0;
            transition: all 0.5s ease;
            outline: none;
            height: 1px;
            padding: 1em;
            font-size: 20px;
            color: rgba(0,0,0,.84);
            font-style: normal;

            ::placeholder{
                color: #ddd;
            }

            :focus{
                border: 1.5px solid #f3575e;
            }


    ${
    props => props.dark && css`
      background-color: rgb(25,25,25);
      border: 10px solid rgb(25,25,25);
      color: #fff;

      :focus{
                border-bottom: 3px solid #ddd;
        }

        ::placeholder{
                color: #484848;
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