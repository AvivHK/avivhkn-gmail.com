import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link className="link" to="/client">Client</Link>
                <div className="vl"></div>
                <Link className="link" to="/actions">Actions</Link>
                <div className="vl"></div>
                <Link className="link" to="/analytics">Analytics</Link>
                <div className="vl"></div>
            </div>
        );
    }
}
export default Header