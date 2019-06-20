import React, { Component } from 'react';

import { HeaderStyled } from './header'


export default class Header extends Component{
    render(){
        return(
            <HeaderStyled>
                <div class="logo">
                    <a>Logo qualquer</a>
                </div>

                <div class="links">
                    <ul>
                        <li>
                            <a href="/signIn">Logar-se</a>
                        </li>
                        <li>
                            <a href="/signUp">Cadastrar-se</a>
                        </li>
                    </ul>
                </div>
            </HeaderStyled>
        )
    }
}

