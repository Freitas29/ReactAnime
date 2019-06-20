import React, { Component } from 'react'
import api from '../../services/api'
import Button from '../../components/button/'
import { Form } from '../../components/form/'
import { Alert } from '../../components/alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
                    <Form>
                        <Col md={6}>
                            <div id="firstPart">
                                <img class="img-fluid" src="https://images.wallpaperscraft.com/image/hanyijie_sky_scenery_ship_anime_art_104162_1920x1080.jpg" />                  
                            </div>
                        </Col>
                        <Col md={6}>
                        <div id="secondPart">
                            { this.handleAlert() }    
                                <h1>
                                    Faça seu login agora mesmo!
                                </h1>
                                <p>
                                    Entre para conhecer mais sobre nossa comunidade incrivel!
                                </p>

                                <div id="fields">
                                    <div id="field-group">
                                        <input type="email" placeholder="E-mail" onChange={e => this.handleEmail(e)}/>
                                    </div>
                                    <div id="field-group">
                                        <input type="password" placeholder="*******" onChange={e => this.handlePassword(e)}/>
                                    </div>


                                    <Button dark onClick={e => this.handleLogin(e)}>Entrar</Button>
                                    <Button warning>Registrar-se</Button>
                                </div>
                            </div>    
                        </Col>
                    </Form>
                </Row>
            </Container>
        )
    }
}
