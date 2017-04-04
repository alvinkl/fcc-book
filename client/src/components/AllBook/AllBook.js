import { getBook, addBook } from '../../../../GlobalConfig'
import React, { Component } from 'react'
import axios from 'axios'

import Book from './components/Book'

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
  constructor(props) {
    super(props)
    this.state = { books: [] }
    this.auth = this.props.route.auth
    this.user = this.auth.getProfile().identities[0].user_id
  }
  
  componentWillMount() {
    this.fetchData()
  }

  fetchData = () => {
    axios.get(getBook)
      .then(res => {
        this.setState({ books: res.data })
      })
      .catch(err => console.error(err))
  }

  handleTradeBook = () => {

  }

  handleAddBook = (e) => {
    e.preventDefault()
    
    const data = {
      user_id: this.user,
      name: e.target.name.value,
      image_URI: 'https://www.discovermeteor.com/images/book.svg',
      requester: []
    }
    console.log('------------------------------------');
    console.log(data);
    console.log('------------------------------------');
    axios.post(addBook, data)
      .then(res => {
        this.setState({
          ...this.state,
          mybook: res.data.books
        }, () => this.fetchData())
      })
  }

  render() {
    const totalTradeRequest = 0
    const totalTradeApproved = 0
    const loc = this.props.location.pathname.split('/')[1]

    const books = this.state.books.map((data, index) => (
      <Book key={ index } data={ data } onClick={ this.handleTradeBook }/>
    )) || null

    const showH = loc == 'allbook' 
    ? (<div>
        <h1>All Books:</h1>
        <hr/>
        <p>Click the <i className="fa fa-retweet"></i> to request a trade</p>
      </div>)
      : (<div>
          <h1>My Books:</h1>
          <hr/>
          <form onSubmit={ this.handleAddBook }>
            <div className="form-group">
                <input type="text" className="form-control" id="name" placeholder='Add Book' ref='bookname'/>
                <button type='submit' className=''>Add</button>
              </div>
          </form>
        </div>)

    return (
      <div className="container">
        { showH }
        <div className="card-deck">
          {
            loc == 'allbook' &&
            books 
          }
        </div>
      </div>
    )
  }
}