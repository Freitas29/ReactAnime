import React, { Component } from 'react'
import api from '../../services/api'


export default class SignIn extends Component{
    constructor(props){
        super(props)
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

    handleLogin = async () => {
        await api.post('http://localhost:3001/api/auth/login', {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }).then((response) => {
            if(response.data.error){
                alert(response.data.error)
            }else{
                debugger
                this.props.history.push("/animes")
                localStorage.setItem("current_user",response.data.token)
                return
            }
        }).catch((response) => {
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

                <button type="button" onClick={(e) => this.handleLogin()}>Logar</button>
            </form>
        )
    }
}
