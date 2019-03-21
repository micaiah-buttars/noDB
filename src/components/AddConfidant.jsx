import React, { Component } from 'react'

class AddConfidant extends Component {
    constructor(){
        super()

        this.state = {
            title: ''
        }

        handleChange = e => {
            let {value} = e.target

            this.setState({
                title: value
            })
        }

        handleClick = () => {
            let confidant = this.state

            this.props.handleAddConfidant(confidant)
        }

    }
    render(){
        return (
            <div>
                <input type="text" placeholder="Add Confidant by Arcana" title="title" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}