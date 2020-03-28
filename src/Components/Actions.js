import React, { Component } from 'react';
import Update from './ActionsComp/Update'
import AddClient from './ActionsComp/AddClient';

class Actions extends Component {


    
    render() {
        return (
            <div className="actions" >
                <Update/>
                <hr/>
                <AddClient/>
            </div>
        )
    }
}

export default Actions;