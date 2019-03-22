import React, { Component } from 'react'
import './ConfidantView.css'

import ConfidantNav from './ConfidantNav'
import RankUp from './RankUp'

class ConfidantView extends Component {
    render(){
        let index = this.props.index;
        let userArr = this.props.userArr;
        
        let render;

        if(userArr[index]){
            render = (
            <div className="cardContainer">
                <section className="cardDisplay">
                    <div className="card">
                        <img className="cardImage" width="240px" height="480px" src={userArr[index].cardUrl} alt="Confidant Tarot"/>
                        <h3 className="deleteX" onClick={() => this.props.deleteConfidant(userArr[index].id)}>X</h3>
                    </div>
                    <ConfidantNav
                        index={index}
                        userArr={userArr}
                        handleDecrement={this.props.handleDecrement}
                        handleIncrement={this.props.handleIncrement}/>
                </section>
                <section className="confidantInfoContainer">
                    <div className="confidantName">
                        <span>Confidant</span> <br/>
                            <span className="confidantNameDisplay">{`${userArr[index].name}`}</span>
                    </div>
                    <div className="arcanaInfo">
                        <span>The </span>
                            <span className="confidantTitle">{`${userArr[index].title}`}</span>
                    </div>
                    <div className="rankInfo">
                        <span>Rank </span>
                            <span className="confidantRank">{`${userArr[index].rank}`}</span>
                        <RankUp 
                            index={index}
                            userArr={userArr}
                            rankUpConfidant={this.props.rankUpConfidant}/>
                    </div>
                </section>
            
            </div>
        )} else{
            render = (
            <div></div>
            )
        }
        return render
        
    }
}

export default ConfidantView