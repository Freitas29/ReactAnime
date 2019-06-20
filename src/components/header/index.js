import React, { Component } from 'react';

import { HeaderStyled } from './header'
import { isAuth } from '../../utils/isAuth'

export default class Header extends Component{
    

    render(){


        const menu = (
            isAuth()? 
            <ul>
                <li>
                    <a href="/animes">Animes</a>
                </li>
            </ul>
            :
            <ul>
                <li>
                    <a href="/signUp">Cadastrar-se</a>
                </li>
                
                <li>
                <a href="/signIn">Logar-se</a>
                </li>
            </ul>  
                
        )

        return(
            <HeaderStyled>
                <div class="logo">
                    <a href="/">Logo qualquer</a>
                </div>

                <div class="links">
                        {menu} 
                </div>
            </HeaderStyled>
        )
    }
}

