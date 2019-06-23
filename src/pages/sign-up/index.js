import React,{Component} from 'react'
import {Form} from '../../components/form/index'
import api from '../../services/api'
import  Col  from 'react-bootstrap/Col'
import  Row  from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import { Alert } from '../../components/alert'
import {Link} from 'react-router-dom'
import Button from '../../components/button/'

export default class SignUp extends Component{

    state = {
        password: "",
        email: "",
        name: "",
        error: false,
    }

    

    handlePassword = (e) =>{
        this.setState({password: e.target.value})
        if(e.target.value.length <= 0){
            alert("Não pode ficar em branco")
        }
    }

    handleEmail = (e) =>{
        this.setState({email: e.target.value})
    }

    handleName = (e) => {
        this.setState({name: e.target.value})
    }


    handleRegister = async (e) => {
    
        e.preventDefault()
        await api.post('http://localhost:3001/api/v1/registrations', {
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
                    <Form>
                        
                        <Col md={6} style={{padding:0}}>
                        <div id="firstPart">
                            
                            <h1>
                                Registre-se
                            </h1>          
                            <p>
                                Se cadastre para interagir com nossa comunidade
                            </p>   
                        </div>
                        </Col>
                        <Col md={6}>
                        <div id="secondPart">
                            { this.handleAlert() }    
                               
                                <div id="fields">
                                    <div id="field-group">
                                        <input type="email" placeholder="E-mail" onChange={e => this.handleEmail(e)}/>
                                    </div>
                                    <div id="field-group">
                                        <input type="text" placeholder="Nome" onChange={e => this.handleName(e)}/>
                                    </div>
                                    <div id="field-group">
                                        <input type="password" placeholder="*******" onChange={e => this.handlePassword(e)}/>
                                        
                                    </div>

                                    <Button dark onClick={e => this.handleRegister(e)}>Registrar-se</Button>
                                    
                                    <Link to="signIn/">
                                        <Button warning>Entrar</Button>
                                    </Link>
                                </div>
                            </div>    
                        </Col>
                    </Form>
                </Row>
            </Container>
        )
    }
}