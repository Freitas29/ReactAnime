import styled, {css} from 'styled-components'


export const CardBorder = styled.div`
    position:relative;
    width: 100%;
    height: 400px;
    margin: 20px 0;
    overflow:hidden;
    border-radius: 15px;
    padding: 5px 5px;

    .imgBox{
        padding: 5px;
        position:absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        background-color:#000;
        clip-path: circle(300px at center 10px);
        transition: all 1s ease;
    }

    .imgBox img{
        width: 100%;
        border-radius: 5px;
    }


    :hover .imgBox{
        position:absolute;
        background-color:#5c7ce5;
        clip-path: circle(0px at center 100px);
    }

    :hover .imgBox img{
        position:absolute;
        top: 0;
        left:0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .content{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 55%;
        padding: 20px;
        text-align:center;
        transition: all 2.5s ease;
    }

    .content h2{
        margin: 13px 0;
        padding: 0;
        font-size: 40px;
        color: #fff;
        text-transform: capitalize;
    }

    .content a{
        text-decoration: none;
        display: inline-block;
    }

     .content a, .content p{
        opacity: 1;
        transition: all 0.5s ease;
        margin-bottom: 65px;
        transform: translateY(20px)
    }

    
     .content p{
        opacity: 0;
        transition: all 0.5s ease;
        transform: translateY(20px);
        font-size: 15px;
        background-color: #5c7ce5;
        text-transform: uppercase;
    }

    

    
    :hover .content p{
        border-radius: 5px;
        opacity: 1;
        transition: 0.7s;
        transform: translateY(0px);
        background-color:#5c7ce5;
        color:#fff;
    }

    :hover .content{
        position: absolute;
        left: 0;
        top:0px;
    }
`