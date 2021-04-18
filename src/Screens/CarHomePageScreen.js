import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from 'react-bootstrap'

import FormContainer from '../Components/FormContainer'
import { createCar } from '../actions/carActions'

// import products from '../products'

const CarHomePageScreen = ({ history, match }) => {
  const dispatch = useDispatch()
  const [manufacturer, setManufacturer] = useState('')
  const [carname, setCarName] = useState('')
  const [cartype, setCarType] = useState('')
  const [color, setColor] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(
      createCar({
        manufacturer,
        cartype,
        carname,
        color,
      })
    )
    history.push('/')
  }

  return (
    <>
      <FormContainer>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='manufacturer'>
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Manufacturer'
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='carname'>
            <Form.Label>CarName</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter the car name'
              value={carname}
              onChange={(e) => setCarName(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId='cartype'>
            <Form.Label>CarType</Form.Label>
            <Form.Control
              as='select'
              value={cartype}
              onChange={(e) => setCarType(e.target.value)}
            >
              <option>SUV</option>
              <option>Sedan</option>
              <option>Small Car</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='color'>
            <Form.Label>Color</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter Color'
              value={color}
              onChange={(e) => setColor(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary' onSubmit={submitHandler}>
            Create
          </Button>
        </Form>
      </FormContainer>
    </>
  )
}

export default CarHomePageScreen
