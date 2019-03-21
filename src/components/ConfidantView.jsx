import React, { Component } from 'react'
import confidants from './confidants'


class ConfidantView extends Component {
    
    
    render(){
        let {index} = this.props;
        let userArr = confidants.slice()
        
        return (
            <div className="cardContainer">
                <section className="cardDisplay">
                    <div className="card">
                        <img className="cardImage" src="" alt=""/>
                        <h3 className="deleteX">X</h3>
                        {/* needs onClick method */}
                    </div>
                    {/* component handling card id, and card nav */}
                </section>
                <section className="confidantInfo">
                    <div className="confidantName">
                        <p>Confidant</p>
                        <p>{`${userArr[index].name}`}</p>
                    </div>
                    <div className="arcanaInfo">
                        <p>The</p>
                        <p>{`${userArr[index].title}`}</p>
                    </div>
                    <div className="rankInfo">
                        <p>Rank</p>
                        <p>{`${userArr[index].rank}`}</p>
                        {/* component handling rank up function */}
                    </div>
                </section>
            
            </div>
        )
    }
}

export default ConfidantView