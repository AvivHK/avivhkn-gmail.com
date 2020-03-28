import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import '../styles/Client.css'


class PageButton extends Component {
    render() {
        return (
            <button>{this.props.num}</button>
        )
    }
}

export default PageButton;