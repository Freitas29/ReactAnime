import React, { Component } from 'react'
import { Card } from '../../components/card'
import Container  from 'react-bootstrap/Container'
import Button from '../../components/button'
import Col  from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import api from '../../services/api'
import './index.css'
export default class extends Component{
    state = {
        animes: [],
    };

    async componentDidMount() {
        const response = await api.get(`http://localhost:3001/api/v1/animes`,{
            headers: {authorization: "Bearer "+localStorage.getItem('current_user') }
        })
        this.setState({animes: response.data})
        console.log(response.data)
    }
    
    formatDate = (date) =>{
        let d = new Date();
        return d.toLocaleDateString("pt-BR",date);
    }
    render() {

        const animesList = this.state.animes.map( anime => 
            <Col md={4}>
                <Card large>
                    <label>{this.formatDate(anime.createdAt)}</label>
                    <div className="image-card">
                        <img className="img-fluid" src={anime.file.url} />
                    </div>
                        <h4>
                            {anime.title}
                        </h4>

                        <p>{anime.description}</p>
                    <Button size="60%">Ver detalhes</Button>
                </Card>        
            </Col>    
        )

        return (
            <Container fluid>
                <Row>
                    {animesList}
                </Row>
        </Container>
        )
    }
}