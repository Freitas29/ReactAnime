import React, { Component } from 'react'
import Form from '../../components/form'


export default class SignIn extends Component{
    render(){
        return(
            <Form
            action="/auth/login"
            buttonName="Logar-se"/>
        )
    }
}
