import React, { Component } from 'react'

import api from '../../services/api'

export default class extends Component{
    state = {
        anime: [],
    };

    async componentDidMount() {
        const response = await api.get(`http://localhost:3001/api/animes/`,{
            headers: {authorization: "Bearer "+localStorage.getItem('current_user') }
        })
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