import React, { Component } from 'react'

class AddConfidant extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: ''
        }
    
    }
    handleChange = e => {
        let {value} = e.target

        this.setState({
            title: value
        })
    }

    handleClick = () => {
        this.props.addConfidant(this.state)
    }

    render(){
        return (
            <div>
                <input className="input" type="text" placeholder="Add Confidant by Arcana" title="title" onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Add</button>
            </div>
        )
    }
}

export default AddConfidant