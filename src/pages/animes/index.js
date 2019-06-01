import React, { Component } from 'react'

import api from '../../services/api'

export default class extends Component{
    state = {
        anime: [],
    };

    async componentDidMount() {
        const { id } = this.props.match.params;
        const response = await api.get(`http://localhost:3001/api/v1/animes/${id}`)
        this.setState({anime: response.data})

        console.log(response.data)
    }
    
    
    render() {
        const { description, title} = this.state.anime
        return (
            <div>
                <p>Titulo: {title}</p>
                <p>Descrição: {description}</p>
            </div>
        )
    }
}