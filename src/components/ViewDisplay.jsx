import React, { Component } from 'react'
import axios from 'axios'

import ConfidantView from './ConfidantView'


class ViewDisplay extends Component {
    constructor(){
        super();

        this.state = {
            userArr: [],
            index: 0,
        }
    }

    rankUpConfidant = () => {
        axios.put(`api/confidants/${this.state.userArr[this.state.index].id}`).then(res => {
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
        }).catch(err => console.log(err))
    }

    handleIncrement = () => {
        if(this.state.index === this.state.userArr.length - 1){
            this.setState({
                index: this.state.userArr.length - 1
            })
        } else {
            this.setState({
              index: this.state.index + 1
            })
        }
     }

    handleDecrement = () => {
        if(this.state.index === 0){
            this.setState({
                index: 0
            })
        }else{
            this.setState({
              index: this.state.index - 1
            })
        }
    }

    render() {
        return (
            <div>
                <ConfidantView
                handleDecrement={this.handleDecrement}
                handleIncrement={this.handleIncrement}
                index={this.state.index}
                userArr={this.state.userArr}
                rankUpConfidant={this.rankUpConfidant}
                deleteConfidant={this.deleteConfidant}
                addConfidant={this.addConfidant}
                />
            </div>
        )
    }
}

export default ViewDisplay