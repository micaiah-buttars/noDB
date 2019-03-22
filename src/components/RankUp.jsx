import React, { Component } from 'react'

class RankUp extends Component{
    constructor(props){
        super(props)
        let userArr = props.userArr
        let index = props.index
     
        this.state = {
            id: userArr[index].id,
            title: userArr[index].title,
            name: userArr[index].name,
            rank: userArr[index].rank,
            cardUrl: userArr[index].cardUrl,
            index: index
        }
    }

    rankUp = () => {
        this.props.rankUpConfidant(this.state)
    }

    render(){
        return (
            <div>
                <span className="rankUpButton" onClick={this.rankUp}>Rank Up</span>
            </div>
        )
    }
}

export default RankUp