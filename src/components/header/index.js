import React, { Component } from 'react';


import './index.css'


export default class Header extends Component{
    render(){
        return(
            <header>
                <ul>
                    <a href="/signIn">Logar-se</a>
                    <a href="/signUp">Cadastrar-se</a>   
                </ul>
            </header>
        )
    }
}

