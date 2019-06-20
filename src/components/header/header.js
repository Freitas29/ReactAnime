import styled from 'styled-components'


export const HeaderStyled  = styled.header`
    width: 100%;
    display:flex;
    min-height: 70px;
    max-height: 450px;
    background-color: #fff;
    display: flex;
    align-items: center;
    align-content:center;
    justify-content: space-between;
    padding: 1em;
    font-size: 17px;
    line-height: 36px;
    color: #484848;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;

    .links{
        width:50%;

        ul{
            list-style:none;
            display:flex;
            align-items:center;
            justify-content:space-around;
            margin:0px;
            
            li{
                border-bottom: 2px solid transparent;
                transition: all 0.5s;
                
                :hover{
                    border-bottom: 1.6px solid #ff5a5f;
                    animation-duration: 2s;
                    cursor: pointer;
                }

                a{
                    cursor: pointer;
                    font-size: 17px;
                    line-height: 36px;
                     color: #484848;
                    text-decoration: none;
                }
            }

            
        }
           
    }
    
`
