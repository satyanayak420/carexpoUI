import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import car from '../Components/Cars'
import { listCars } from '../actions/carActions'

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
import Car from '../Components/Cars'

// import products from '../products'

const HomePageScreen = ({ history, match }) => {
  const dispatch = useDispatch()
  const keyword = match.params.keyword

  const { loading, cars, error } = useSelector((state) => state.carList)

  useEffect(() => {
    dispatch(listCars(keyword))
  }, [dispatch, keyword])
  return (
    <>
      <Row>
        {cars &&
          cars.map((car) => (
            <Col sm={12} md={6} lg={4} xl={3} key={car._id}>
              <Car car={car} />
            </Col>
          ))}
      </Row>
    </>
  )
}

export default HomePageScreen
