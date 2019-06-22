import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    width: 100%;
    color: #484848;
    margin-top:2%;
    height: 90vh;
    overflow:hidden;
    
    .actions{
        margin-top: 5%;
    }

    .form-body{
        width: 100%;
    }

    textarea{
        width: 100%;
        height: 40%;
        font-size: 17px;
        color: #222326;
        background-color:#fff;
        border: none;
        border-bottom:2px solid #ddd;
        border-radius: 6px;
        font-weight:bold;
        transition: all 0.5 ease;
        outline: none;
        padding: 1em;

        :focus{
            border-bottom: 3px solid #ff5a5f;
        }
    }

    input[type='file']{
        display:none;

        
    }

    #forFile{
        margin-top:2%;
        width: 100%;
        font-size: 17px;
        color: #222326;
        background-color:#fff;
        border:2px solid #ddd;
        border-radius: 6px;
        font-weight:bold;
        transition: all 0.5 ease;
        outline: none;
        padding: 1em;
    }

   
    #firstPart{
        background-color: ${props => props.default ? "#fff" : "#ff5a5f"};
        height: 100%;
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap: wrap;
        img{
            border-radius: 14px;
            height:100%;
        }

        h1{
            text-transform: uppercase;
            color:white;
            font-family: 'Mali', cursive;
            border-bottom: 2px solid white;
            border-radius: 5%;
        }

        p{
            
            font-family: 'Mali', cursive;
            color:white;
        }
    }

    #secondPart{
        padding: 3rem;
        background-color: #fff;
        height: 100%;

        h1{
            font-size: 30px;
            line-height: 36px;
            letter-spacing: normal;
            font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
            text-transform: undefined;
            color: #484848;
            padding-top: 6px;
            padding-bottom: 6px;
            margin: 0px;
            padding: 0px
        }

        p{
            font-size: 16px;
            line-height: 22px;
            letter-spacing: normal;
            font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
            color: rgb(72, 72, 72);
            font-weight: normal;
            margin-top: 0px;
        }

        
        
    }
`