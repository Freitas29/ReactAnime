import styled,{css} from 'styled-components'

export const Card = styled.div`
    ${
        props => props.large && css`
            height: 80vh !important;
            width: 100% !important;
            padding: 14px 12px;
            background-color: rgb(255, 255, 255) !important;
            border:1px solid transparent;
            transition: all 0.5s ease;
            
            label{
                font-size: 12px;
                color: rgba(0,0,0,.84);
            }

            .img-fluid{
                border-radius: 6px;
            }

            h4{
                padding: 3px 6px;
                margin-top: 6px;
                font-style: normal;
                font-weight: 400;
                line-height: 1.25;
                letter-spacing: 0;
                font-size: 20px;
                color: rgba(0,0,0,.84);
                text-transform: uppercase;

            }

            p{
                font-size: 12px;
                text-transform: uppercase;
                /* color: rgba(0,0,0,.54);
                line-height: 28px; */
                color: rgba(0,0,0,.54);
                height: 23%;
                overflow:hidden; 
                text-overflow: ellipsis;
                line-height: 20px;
            }

            :hover{
                background-color: rgb(255, 255, 255);
                border-radius:6px;
                border: 2px solid #ddd;
                transform: scale(1.02);
                z-index:11;
            }
        `
    }   


    margin-top: 2%;
    position: relative;
    width:300px;
    height:400px;
    background: #262626;
    overflow:hidden;
    border-radius: 1% 3% 1% 3%;
     
    input, .toggle{
        position: absolute;
        width: 50px;
        height: 50px;
        bottom: 50px;
        right: 50px;
        outline: none;
        z-index:10;
    }

    .input-left, .toggle-left{
        position: absolute;
        width: 50px;
        height: 50px;
        bottom: 50px;
        left: 50px;
        outline: none;
        z-index:10;
    }

    input{
        opacity: 0;
    }

    .input-left{
        opacity: 0;
    }    

    .toggle{
        pointer-events: none;
        border-radius: 60%;
        background: #fff;
        transition: 0.5s;
        text-align:center;
        line-height: 50px;
        font-size: 36px;
        box-shadow: 0 0 0 0px #9c27b0;
    }

    .toggle-left{
        border-radius: 60%;
        background: #fff;
        transition: 0.5s;
        text-align:center;
        line-height: 50px;
        font-size: 16px;
        box-shadow: 0 0 0 0px #9c27b0;
    }

    input:checked ~ .toggle{
        box-shadow: 0 0 0 500px #ff5a5f;
        transform: rotate(225deg);
    }


    .imgCard, .details{
        position: absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
    }

    .details{
        padding: 20px;
        box-sizing: border-box;
        z-index: 11;
        pointer-events:none;
        transition: 0.5s;
        opacity: 0;
    }

    input:checked ~ .details{
        opacity: 1;
        transition-delay: 0.5s;
    }

    .details h2{
        margin-bottom: 5px;
        color:#fff;
    }
    

    .details p{
        margin: 0;
        padding: 0;
        color:#fff;
        width: 100%;
        overflow-wrap: break-word;
    }

    
`