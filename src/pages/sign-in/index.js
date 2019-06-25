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
        await api.post('http://localhost:3001/api/v1/sessions', {
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
            <Container fluid className="d-flex align-itens-center justify-content-center">
                    <Row>
                        <Col md={12}>
                            <div className="box">
                            <Form>
                            <img src="https://image.flaticon.com/icons/svg/145/145859.svg" className="imageBox"/>

                                <div className="inputBox">
                                    <Input dark placeholder="example@email.com"/>
                                   
                                </div>

                                <div className="inputBox">
                                    <Input dark type="password" placeholder="*******"/>
                                    
                                </div>

                                <Button primary >Entrar</Button>
                            </Form>  
                            </div>                      
                        </Col>
                    </Row>
            </Container>
        )
    }
}
