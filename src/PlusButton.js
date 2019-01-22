import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Button.css'

class PlusButton extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired
    }

    render() {
        return (
            <button className="plus-button" onClick={this.props.onClick}>+</button>
        )
    }
}

export default PlusButton