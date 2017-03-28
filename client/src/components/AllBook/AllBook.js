import React, { Component } from 'react'
import axios from 'axios'

const mockingData = [
  { _id: '1' ,name: 'Destined to reign', image_URI: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSwL6hlWe6d3kHx0I4gf74tpAoVZbbrqGCeYsesN3gj0DoAUQTG' },
  { _id: '2' ,name: 'Destined to reign', image_URI: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSwL6hlWe6d3kHx0I4gf74tpAoVZbbrqGCeYsesN3gj0DoAUQTG' },
  { _id: '3' ,name: 'Destined to reign', image_URI: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSwL6hlWe6d3kHx0I4gf74tpAoVZbbrqGCeYsesN3gj0DoAUQTG' },
  { _id: '4' ,name: 'Destined to reign', image_URI: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSwL6hlWe6d3kHx0I4gf74tpAoVZbbrqGCeYsesN3gj0DoAUQTG' },
  { _id: '5' ,name: 'Destined to reign', image_URI: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSwL6hlWe6d3kHx0I4gf74tpAoVZbbrqGCeYsesN3gj0DoAUQTG' },
  { _id: '6' ,name: 'Destined to reign', image_URI: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSwL6hlWe6d3kHx0I4gf74tpAoVZbbrqGCeYsesN3gj0DoAUQTG' },
  { _id: '7' ,name: 'Destined to reign', image_URI: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSwL6hlWe6d3kHx0I4gf74tpAoVZbbrqGCeYsesN3gj0DoAUQTG' },
  { _id: '8' ,name: 'Destined to reign', image_URI: 'http://t3.gstatic.com/images?q=tbn:ANd9GcSwL6hlWe6d3kHx0I4gf74tpAoVZbbrqGCeYsesN3gj0DoAUQTG' },
]

const imageStyle = {
  maxWidth: '200px',
  maxHeight: '200px',
}

export default class AllBook extends Component {
  
  componentWillMount() {
    
  }

  render() {
    const totalTradeRequest = 0
    const totalTradeApproved = 0

    const books = mockingData.map(data => (
      <div className="col-xs-6 col-md-3" key={ data._id }>
        <a href="#" className="thumbnail">
          <img src={ data.image_URI } alt={ data.name } />
        </a>
      </div>
    )) || null

    return (
      <div class="container">
        <div className="row">
          <div className="col-lg-8">
            <button className="btn btn-success col-lg-4">Your trade request ({ totalTradeRequest } outstanding)</button>
            <button className="btn btn-primary col-lg-4">Your trade request ({ totalTradeApproved } unapproved)</button>
          </div>
        </div>
        <h1>All Books:</h1>
        <hr/>
        <p>Click the <i className="fa fa-retweet"></i> to request a trade</p>
        <div className="card-deck">
          { books }
        </div>
      </div>
    )
  }
}