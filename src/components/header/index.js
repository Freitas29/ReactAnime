import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './index.css'


export default class Header extends Component{
    render(){
        return(
            <header>
                <ul>
                    <a href="/signIn">Cadastrar-se</a>   
                </ul>
            </header>
        )
    }
}

