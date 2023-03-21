import { useState,useEffect } from 'react';
import {Container, Row, Col, Card, } from 'react-bootstrap';
import axios from 'axios';

const Mycart = () =>{
    const[photos, setPhotos]= useState([]);
    useEffect(() => {
        axios.get('http://fakestoreapi.com/products/')
        .then((res) => setPhotos(res.data))
        .catch((err) => console.log(err))
    }, [])

    return(
        <div> 
        <Container>
        <Row>
        {photos.map((photo) => (
             <Col md={3} className="mt-2 mb-2" key={photo.id}>
             <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={photo.image} style={{height:"250px"}} />
          <Card.Body>
            <Card.Title>{photo.title}</Card.Title>
            <Card.Body>Category:{photo.category}</Card.Body>
            <Card.Body>Price:{photo.price}</Card.Body>
            <Card.Body>Rating:{photo.rating.rate}</Card.Body>
            <Card.Body>Count:{photo.rating.count}</Card.Body>
            <a href={photo.description} className="btn btn-dark btn-sm">Product Description</a>

          </Card.Body>
        </Card>
        </Col>
        ))}
          
        </Row>
     </Container>
        </div>
    )
}
export default Mycart;