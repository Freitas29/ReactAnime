import React, { Component } from 'react';
import Axios from 'axios';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import {isAuth} from '../../utils/isAuth'
import { Input } from '../../components/input/index'
import './show.css'
export default class AnimeShow extends Component{
    constructor(props){
        super(props);
    }

    state = {
        anime: '',
        comments: ''
    }
   
    async componentDidMount() {
        let id = this.props.match.params.id;
        let response = await Axios.get(`http://localhost:3001/api/v1/animes/${id}`)
        this.setState({anime: response.data})
        this.setState({comments: this.state.anime.comments})
    }
    
     animes = () => {
        this.state.anime.comments.map(function(e){
            return(<p>{e.content}</p>)
        })
    }
    

    render(){
        
        
        const sendComment = (
                isAuth() ?
                   <Input dark placeholder="Comente aqui"/>    
                :
                    <Input dark placeholder="Entre para poder comentar" disabled/>
            )

            
        return(
           <Container>
               <Row>
                    <Col md={6}>
                        <h1>{this.state.anime.title}</h1>

                        <p>
                            {this.state.anime.description}
                        </p>
                    </Col>

                    <Col md={6}>
                        <img className="img-fluid" src="https://miro.medium.com/max/2160/1*dKwkXqW3auI2Ix3HoPciqQ.png" />
                    </Col>
               </Row>


               <Row>
                   <Col md={12}>
                        <hr />
                    </Col>

                    <Col md={12}>
                        {sendComment}
                    </Col>

                    <Col md={12} className="d-flex align-itens-center justify-content-center">
                                                <div className="cardComment">
                            <Row>
                            <Col md={1}>
                                <img src="https://cdn-images-1.medium.com/fit/c/36/36/0*XHL-ff3PknJx8Wrv." />
                            </Col>
                            <Col md={9}>
                                <h5>Arão Freitas</h5>
                                <label>15/06</label>

                                <p>{this.state.anime.title}</p>
                            </Col>

                            <Col>
                            {this.animes()}
                            </Col>
                            </Row>
                        </div>
                    </Col>


                    
                </Row>

                
           </Container>
        )
    }
}