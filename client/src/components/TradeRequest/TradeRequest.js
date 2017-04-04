import React, { Component } from 'react'

const TradeRequest = (user) => {
  const totalTradeRequest = user.totalTradeRequest || 1
  const totalTradeApproved = user.totalTradeApproved || 1

  return (
    <div className="row">
      <div className="col-lg-8">
        <button className="btn btn-success col-lg-4">Your trade request ({ totalTradeRequest } outstanding)</button>
        <button className="btn btn-primary col-lg-4">Your trade request ({ totalTradeApproved } unapproved)</button>
      </div>
    </div>
  )
}

export default TradeRequest