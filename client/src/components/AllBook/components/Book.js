import React from 'react'

const Book = props => {
  return (
    <div className="col-xs-6 col-md-3" key={ props.data._id }>
      <a href="#" className="thumbnail">
        <img src={ props.data.image_URI } alt={ props.data.name } />
      </a>
    </div>
  )

}


export default Book