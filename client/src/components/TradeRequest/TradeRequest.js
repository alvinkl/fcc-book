import React, { Component } from 'react'
import axios from 'axios'

import { getBook } from '../../../../GlobalConfig'

export default class TradeRequest extends Component {
  state = { totalTradeRequest: 0, totalTradeApproved: 0 }

  fetchData = () => {
    const user_id = this.props.user.getProfile().identities[0].user_id
    axios.get(`${getBook}/${user_id}`)
      .then(res => {
        res.data.map(book => {
          return this.setState({ totalTradeRequest: this.state.totalTradeRequest + book.requesters.length })
        })
      })
  }

  render() {
    const totalTradeRequest = this.state.totalTradeRequest
    const totalTradeApproved = this.state.totalTradeApproved

    return (
      <div className="row">
        <div className="col-lg-8">
          <button className="btn btn-success col-lg-4">Your trade request ({ totalTradeRequest } outstanding)</button>
          <button className="btn btn-primary col-lg-4">Your trade request ({ totalTradeApproved } unapproved)</button>
        </div>
      </div>
    )
  }
}