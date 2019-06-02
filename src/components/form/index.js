import React, { Component } from 'react'
import api from '../../services/api'

export default class Form extends Component{
    state = {
        name: "",
        password: "",
        email: "",
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }

    handlePassword = (e) =>{
        this.setState({password: e.target.value})
    }

    handleEmail = (e) =>{
        this.setState({email: e.target.value})
    }

    handleLogin = async () => {
        const response = await api.post('http://localhost:3001/api/v1/sessions', {
            email: this.state.email,
            password: this.state.password
        }).then(function (response){
            const {status} = response
            alert(status)
        }).catch(function (response){
            alert('caiu no erro');
        })

        
    }
    
    render(){
        return(
            <form action={this.props.action} method="POST">
                <label>Nome</label>
                <input placeholder="Digite seu nome" onChange={(e) => this.handleName(e)}/>

                <label>E-mail</label>
                <input placeholder="Digite seu email" onChange={(e) => this.handleEmail(e)}/>

                <label>Senha</label>
                <input type="password" placeholder="*********" onChange={(e) => this.handlePassword(e)}/>

                <button type="button" onClick={(e) => this.handleLogin()}>{this.props.buttonName}</button>
            </form>
        )
    }
}