import React, { Component } from 'react'
import { Card } from '../../components/card'
import Container  from 'react-bootstrap/Container'
import Col  from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import api from '../../services/api'

export default class extends Component{
    state = {
        animes: [],
    };

    async componentDidMount() {
        const response = await api.get(`http://localhost:3001/api/animes/`,{
            headers: {authorization: "Bearer "+localStorage.getItem('current_user') }
        })
        this.setState({animes: response.data})
        console.log(response.data)
    }
    
    
    render() {

        const animesList = this.state.animes.map( anime => 
            <Col md={4}>
                <Card>
                    <input type="checkbox" />
                    <div className="toggle">+</div>
                    <div className="imgCard">
                        <img src="#" />
                    </div>
                    <div className="details">
                        <h2>
                            {anime.title}
                        </h2>

                        <p>{anime.description}</p>
                    </div>
                </Card>        
            </Col>    
        )

        return (
            <Container>
                <Row>
                    {animesList}
                </Row>
        </Container>
        )
    }
}