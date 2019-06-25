import styled from 'styled-components'


export const HeaderStyled  = styled.header`
    background-color: #000 !important;
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
    /* box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px; */

    .box{
        position:relative;
        width:100%;
        height:auto;
        box-sizing:border-box;
        text-align:center;
        background-color:#000;
    }

    .box  .icon{
        width:100%;
        height: 100%;
        background-color: #000;
        transition: 0.5s;
        transform-origin: top;
        transform: translateX(0px) rotate(0deg);
    }

    .box:hover .icon{
       transform: translateY(100%) rotateX(90deg) !important;
    }

    .box  .icon svg{
        font-size: 2em;
        line-height: 100px;
        color: #db7093;
    }

    .box .details{
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background-color: #0075f2;
        border-radius: 50px;
        transition: 0.5s;
        transform-origin: bottom;
        transform: translateY(-100px) rotateX(90deg) !important;
    }

    .box:hover  .details{
       transform: translateY(0) rotateX(0deg) !important;
    }

    .box .details label{
        margin:0;
        padding:0;
        
        font-family: 24px;
        color: #fff;


        a{
            color: #fff;
            text-decoration:none;
        }
        
    }



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
                width: 100%;
            }
            
        }
           
    }
    
`
