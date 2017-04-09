import { getBook, addBook, updateBook } from '../../../../GlobalConfig'
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
    this.state = { all_books: [], user_books: [], location: '' }
    this.auth = this.props.route.auth
    this.user = this.auth.getProfile().identities[0].user_id
  }
  
  componentWillMount() {
    this.fetchData()
    this.fetchData(this.user)
    this.setState({ location: this.props.location.pathname.split('/')[1] })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ location: this.props.location.pathname.split('/')[1] })
  }

  fetchData = (user_id = '') => {
    axios.get(`${getBook}/${user_id}`)
      .then(res => {
        user_id ? 
          this.setState({ user_books: res.data })
          : this.setState({ all_books: res.data })
      })
      .catch(err => console.error(err))
  }

  handleTradeBook = (id) => {
    axios.post(updateBook, { user_id: this.user, book_id: id })
      .catch(err => console.error(err))
  }

  handleAddBook = (e) => {
    e.preventDefault()
    
    const data = {
      user_id: this.user,
      name: e.target.name.value,
      image_URI: 'https://www.discovermeteor.com/images/book.svg',
      requester: []
    }

    axios.post(addBook, data)
      .then(res => {
        this.setState({
          ...this.state,
          user_books: res.data.books
        }, () => this.fetchData(this.user))
      })
  }

  render() {
    const totalTradeRequest = 0
    const totalTradeApproved = 0

    const allBook = this.state.location === 'allbook' ? 
      this.state.all_books.map((data, index) => (
        <Book key={ index } data={ data } handleClick={ this.handleTradeBook.bind(null, data._id) }/>
      ))
      : null

    const myBook = this.state.location === 'mybook' ? 
      this.state.user_books.map((data, index) => (
        <Book key={ index } data={ data } />
      ))
      : null

    const showH = this.state.location == 'allbook' 
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
            this.state.location == 'allbook' &&
            allBook 
          }
          {
            this.state.location == 'mybook' &&
            myBook
          }
        </div>
      </div>
    )
  }
}