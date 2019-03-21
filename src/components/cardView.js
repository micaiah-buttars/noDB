import React, { Component } from 'react'
import axios from 'axios'



class CardView extends Component {
    constructor(){
        super();

        this.state = {
            userArr: []
        }
    }

    rankUpConfidant = confidant => {
        axios.put(`api/confidants/${confidant.id}`, confidant).then(res => {
            this.setState({
                userArr: res.data
            })
        }).catch(err => console.log(err))
    }

    addConfidant = confidant => {
        axios.post('api/confidants', confidant).then(res => {
            this.setState({
                userArr: res.data
            })
        }).catch(err => console.log(err))
    }
    deleteConfidant = id => {
        axios.delete(`api/confidants/${confidant.id}`).then(res => {
            this.setState({
                userArr: res.data
            })
        }).catch(err => console.log(err))
    }
    componentDidMount() {
        axios.get('/api/animals').then(res => {
            this.setState({
                userArr: res.data
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <ConfidantView 
                userArr={this.state.userArr}
                rankUpConfidant={this.rankUpConfidant}
                addConfidant={this.addConfidant}
                deleteConfidant={this.deleteConfidant}
                />
            </div>
        )
    }


}

export default CardView