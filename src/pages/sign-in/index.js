import React, { Component } from 'react'
import api from '../../services/api'
import Button from '../../components/button/index'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'

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
            <Container>
                <Form>
                    <Form.Group >
                        <Form.Label>
                            E-mail
                        </Form.Label>
                        <Form.Control type="email" placeholder="Digite seu email" onChange={(e) => this.handleEmail(e)}/>
                    </Form.Group>
                    
                    <Form.Group >
                        <Form.Label>
                            Senha
                        </Form.Label>
                        <Form.Control type="password" placeholder="*****" onChange={(e) => this.handlePassword(e)}/>
                    </Form.Group>
                    <Button onClick={(e) => this.handleLogin()}>
                        Logar
                    </Button>


                </Form>
            </Container>
        )
    }
}
