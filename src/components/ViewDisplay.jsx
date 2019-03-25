import React, { Component } from 'react'
import axios from 'axios'

import ConfidantView from './ConfidantView'
import AddConfidant from './AddConfidant'


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
            if(res.data === "confidantErr"){
                alert("Confidant Not Found")
            } else if(res.data === "userArrErr"){
                alert("Confidant is Already in List")
            } else(
            this.setState({
                userArr: res.data
            })
            )
        }).catch(err => console.log(err))
    }
    deleteConfidant = id => {
        axios.delete(`api/confidants/${id}`).then(res => {
            if(this.state.index >= 1){
            this.setState({
                userArr: res.data,
                index: this.state.index - 1
            })
        } else {
            this.setState({
                userArr: res.data,
                index: 0
            })
        }
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
                index: 0
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
                index: this.state.userArr.length - 1
            })
        }else{
            this.setState({
              index: this.state.index - 1
            })
        }
    }

    render() {
        if(!this.state.userArr.length){
            return (
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <AddConfidant 
                    addConfidant={this.addConfidant}
                    />
                </div>

            )
        } else {
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
}

export default ViewDisplay