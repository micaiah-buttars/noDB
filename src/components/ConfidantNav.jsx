import React, { Component } from 'react'

class ConfidantNav extends Component {

    handleClickPrev = () => {
        this.props.handleDecrement()
    }

    handleClickNext = () => {
        this.props.handleIncrement()
    }

    render() {
        let index = this.props.index;
        let userArr = this.props.userArr;
        return (
            <div>
                <div className="confidantNav">
                    <button className="button" onClick={this.handleClickPrev}>{'Previous'}</button>
                    <button className="button" onClick={this.handleClickNext}>{'Next'}</button>
                </div>
            </div>
        )
    }
}

export default ConfidantNav