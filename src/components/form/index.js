import React, { Component } from 'react'
import api from '../../services/api'

export default class Form extends Component{
    
    constructor(props){
        super(props);
        this.state = {action: props.action}
        this.handleLogin.bind(props)
    }

    state = {
        name: "",
        password: "",
        email: "",
        action: "",
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

    handleLogin = async (props) => {
        await api.post(`http://localhost:3001/api${this.state.action}`, {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }).then(function (response){
            const {status} = response
            localStorage.setItem("current_user",response.data.token)
            console.log(status)
        }).catch(function (response){
            console.log(response)
        })
        
    }
    
    render(){
        return(
            <form>
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