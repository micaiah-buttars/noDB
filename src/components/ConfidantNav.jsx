import React, { Component } from 'react'

class ConfidantNav extends Component {

    handleClickPrev = () => {
        this.props.handleDecrement()
    }

    handleClickNext = () => {
        this.props.handleIncrement()
    }

    render() {
        return (
            <div>
                <div className="confidantNav">
                    <button className="buttonPrev" onClick={this.handleClickPrev}>{'PREVIOUS'}</button>
                    <button className="buttonNext" onClick={this.handleClickNext}>{'NEXT'}</button>
                </div>
            </div>
        )
    }
}

export default ConfidantNav