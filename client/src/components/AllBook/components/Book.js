import React from 'react'

const Book = props => {
  return (
    <div className="col-xs-6 col-md-3" key={ props.data._id }>
      <button href="#" className="thumbnail" onClick={ props.handleClick }>
        <img src={ props.data.image_URI } alt={ props.data.name } />
      </button>
    </div>
  )

}


export default Book