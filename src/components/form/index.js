import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    width: 100%;
    color: #484848;
    height: 90vh;
    overflow:hidden;
    background-color: #fff;

    #firstPart{
        padding: 4rem;
        background-color: #fff;
        height: 100%;
        
        img{
            border-radius: 14px;
            height:100%;
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

        input{
            width: 100%;
            font-size: 17px;
            line-height: 1.5;
            color: #222326;
            background-color: #fff;
            border:none;
            border-bottom: 2px solid #ebebeb;
            font-weight: bold;
            border-radius: 2%;
            margin: 1rem;
            transition: all 0.5s ease;
            outline: none;
            height: 48px;
            padding: 1em;

            :focus{
                border-bottom: 3px solid #ff5a5f;
            }
        }
    }
`