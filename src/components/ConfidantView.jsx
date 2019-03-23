import React, { Component } from 'react'
import './styles.css'

import ConfidantNav from './ConfidantNav'
import RankUp from './RankUp'
import AddConfidant from './AddConfidant'

class ConfidantView extends Component {
    render(){
        let index = this.props.index;
        let userArr = this.props.userArr;
        
        let render;

        if(userArr[index]){
            render = (
            <div className="cardContainer">
            
                <section className="cardDisplay">
                    <div>
                        <h3 className="deleteX" onClick={() => this.props.deleteConfidant(userArr[index].id)}>X</h3>
                        <img className="cardImage" width="240px" height="480px" src={userArr[index].cardUrl} alt="Confidant Tarot"/>
                    </div>
                    <ConfidantNav
                        index={index}
                        userArr={userArr}
                        handleDecrement={this.props.handleDecrement}
                        handleIncrement={this.props.handleIncrement}/>
                        <AddConfidant 
                        addConfidant={this.props.addConfidant}/>
                </section>
                <section className="confidantInfoContainer">
                    <div className="confidantName">
                        <span className="confidantArticle">Confidant</span> <br/>
                            <div className="confidantNameBorder">
                            <div className="confidantNameDisplay">
                            <span>{`${userArr[index].name}`}</span>
                            </div>
                            
                            </div>
                            
                    </div>
                    <div className="arcanaInfo">
                        <div className="arcanaBorder">
                        <div className="arcanaInfoDisplay">
                        <span className="article">Arcana </span>
                        <span className="confidantTitle">{`${userArr[index].title}`}</span>
                        </div>
                        </div>

                            
                    </div>
                    <div className="rankInfo">
                    <div className="rankBorder">
                    <div className="rankDisplay">
                    <span className="article">Rank </span>
                            <span className="confidantRank">{`${userArr[index].rank}`}</span>
                    
                    </div>
                    </div>
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