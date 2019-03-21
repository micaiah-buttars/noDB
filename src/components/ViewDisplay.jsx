import React, { Component } from 'react'
import axios from 'axios'

import ConfidantView from './ConfidantView'
import AddConfidant from './AddConfidant';



class ViewDisplay extends Component {
    constructor(){
        super();

        this.state = {
            userArr: [],
            index: 0
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
        axios.delete(`api/confidants/${id}`).then(res => {
            this.setState({
                userArr: res.data
            })
        }).catch(err => console.log(err))
    }
    componentDidMount() {
        axios.get('/api/confidants').then(res => {
            this.setState({
                userArr: res.data
            })
            console.log(this.state.userArr)
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <ConfidantView
                index={this.state.index}
                userArr={this.state.userArr}
                rankUpConfidant={this.rankUpConfidant}
                deleteConfidant={this.deleteConfidant}
                />
                <AddConfidant 
                addConfidant={this.addConfidant}/>
            </div>
        )
    }


}

export default ViewDisplay