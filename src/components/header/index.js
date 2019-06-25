import React, { Component } from 'react';

import { HeaderStyled } from './header'
import { isAuth } from '../../utils/isAuth'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight,faUserCircle} from '@fortawesome/free-regular-svg-icons'

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
                    <div className="box">

                        <div className="icon">
                            <FontAwesomeIcon icon={faArrowAltCircleRight} />
                        </div>
                        <div className="details">
                            <label><Link to="/signUp">Cadastrar-se</Link></label>
                        </div>
                    </div>
                </li>
                
                <li>
                    <div className="box">

                        <div className="icon">
                            <FontAwesomeIcon icon={faUserCircle} />
                        </div>
                        <div className="details">
                            <label><Link to="/signIn">Logar-se</Link></label>
                        </div>
                    </div>
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

