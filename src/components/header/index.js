import React, { Component } from 'react';

import { HeaderStyled } from './header'
import { isAuth } from '../../utils/isAuth'
import { Link } from 'react-router-dom'
export default class Header extends Component{
    

    render(){


        const menu = (
            isAuth()? 
            <ul>
                <li>
                    <Link to="/animes">Animes</Link>
                </li>
                <li>
                    <Link to="/animes/new">Criar anime</Link>
                </li>
            </ul>
            :
            <ul>
                <li>
                    <Link to="/signUp">Cadastrar-se</Link>
                </li>
                
                <li>
                <Link to="/signIn">Logar-se</Link>
                </li>
            </ul>  
                
        )

        return(
            <HeaderStyled>
                <div class="logo">
                    <Link to="/">Logo qualquer</Link>
                </div>

                <div class="links">
                        {menu} 
                </div>
            </HeaderStyled>
        )
    }
}

