import React, { Component } from 'react'
import './index.css'
import api from '../../services/api'
import Button from '../../components/button/'
import { Form } from '../../components/form/'
import { Alert } from '../../components/alert'
import Container from 'react-bootstrap/Container'
import { Input } from '../../components/input'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
export default class SignIn extends Component{
    constructor(props){
        super(props)
    }

    state = {
        password: "",
        email: "",
        error: false,
    }

    

    handlePassword = (e) =>{
        this.setState({password: e.target.value})
    }

    handleEmail = (e) =>{
        this.setState({email: e.target.value})
    }

    handleLogin = async (e) => {
        e.preventDefault()
        await api.post('http://localhost:3001/api/auth/login', {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }).then((response) => {
            if(response.data.error){
                this.setState({ error: response.data.error})
            }else{
                console.log("Resposta",response)
                this.props.history.push("/animes")
                localStorage.setItem("current_user",response.data.token)
            }
        }).catch((response) => {
            console.log(response)
        })
    }
    

    handleAlert = () => {
        if(this.state.error){    
            return(
                <Alert warning >
                    { this.state.error }
                </Alert>
            )
        }
    }


    render(){
        return(
            <Container fluid>
                    <Row>
                        <Col md={6}>
                        <Form>
                        <div id="formBorder">    
                            <div className="form-body">

                            <Input type="email" noBorderPrimaryMd placeholder="E-mail" onChange={e => this.handleEmail(e)}/>
                
                            <Input type="password" noBorderPrimaryMd onChange={e => this.handlePassword(e)}/>
                        </div>
                        
                            <div className="actions">                            
                                <Button dark onClick={e => this.handleLogin(e)}>Entrar</Button>

                                <Link to="signUp/">                                    
                                    <Button warning>Registrar-se</Button>
                                </Link>
                            </div>
                            
                        </div>
                        </Form>
                        </Col>

                        <Col md={6}>
                            aakdlasçkd
                        </Col>
                    </Row>
                
            </Container>
        )
    }
}
