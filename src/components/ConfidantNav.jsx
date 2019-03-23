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
                    <h3 className="prev" onClick={this.handleClickPrev}>{'<'}</h3>
                    <h3 className="next" onClick={this.handleClickNext}>{'>'}</h3>
                </div>
            </div>
        )
    }
}

export default ConfidantNav