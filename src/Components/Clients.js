import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import Client from './Client'
import '../styles/Clients.css'
import PageButton from './PageButton'

@inject("clientsData")
@observer
class Clients extends Component {

    constructor() {
        super()
        this.state = {
            clients: [],
            pageNum: 1,
            numButtons: [],
            numInPage: 20
        }
    }

    componentDidMount = async () => {
        await this.props.clientsData.getClientsData()
        this.setState({
            clients: this.props.clientsData.clients
        })
    }

    currentClients = () => {
        return this.state.clients.slice((this.state.pageNum * this.state.numInPage) - this.state.numInPage, this.state.pageNum * this.state.numInPage)
    }

    changeValue = async event => {
        await this.setState({
            numInPage: event.target.value,
            pageNum: 1
        })
    }

    pageDown = () => {
        if (this.state.pageNum === 1) { return }
        let pageNum = this.state.pageNum - 1
        this.setState({ pageNum })
    }

    pageUp = () => {
        if ((this.state.pageNum) * this.state.numInPage >= this.state.clients.length) { return }
        this.setState({ pageNum: (this.state.pageNum + 1) })
    }

    showCurrentClientNum = () => {
        let topNum = this.state.pageNum * this.state.numInPage
        let lowNum = topNum - (this.state.numInPage - 1)

        return (
            <span id="pagination">
                <div className="nav">
                    <button className="page-move" onClick={this.pageDown}>{"<"}</button>
                    <div className="display-page" >
                        {lowNum} - {this.state.pageNum * this.state.numInPage > this.state.clients.length && this.state.clients.length ? 'END' : topNum}
                    </div>
                    <button className="page-move" onClick={this.pageUp}> {">"} </button>
                </div>
                <input className="inputNumInPages" style={{ display: "inline" }} value={this.state.value} onChange={this.changeValue} placeholder="#in page"></input>
            </span>
        )
    }


    render() {
        return (
            <div className="clients">
                <div className="title sticky">
                    <div className="title-prop">First Name</div>
                    <div className="title-prop">Last Name</div>
                    <div className="title-prop">Country</div>
                    <div className="title-prop">First Contact</div>
                    <div className="title-prop">Email</div>
                    <div className="title-prop">Sold</div>
                    <div className="title-prop">Owner</div>
                </div>
                {this.currentClients().map((c, i) => <div key={i}><Client client={c} /></div>)}
                {this.showCurrentClientNum()}
            </div>
        )
    }
}
export default Clients