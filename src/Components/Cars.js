import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Car = ({ car }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      {/* <a href={`/product/${props.product._id}`}>
        <Card.Img src={props.product.image} variant='top' />
      </a> */}

      <Card.Body>
        <Link to={`/product/${car._id}`}>
          <Card.Title as='div'>
            <strong>{car.carname}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          {/* <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div> */}
          {car.manufacturer}
        </Card.Text>
        <Card.Text as='h3'>${car.cartype}</Card.Text>
        <Card.Text as='h3'>${car.color}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Car
