import { Button, Card, Col, Image, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { React, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Rating from '../components/Rating'
import { listProductDetails } from '../actions/productActions'

const ProductScreen = () => {
    const dispatch = useDispatch()
    let params = useParams();

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    useEffect(() => {

        dispatch(listProductDetails(params.id))
    }, [dispatch, params]);


    return (
        <>
            <Link className='btn btn-light my-3' to='/'>
                Go Back
            </Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :

                (
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid>

                            </Image>
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroupItem>
                                    <h3>{product.name}</h3>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <Rating value={product.rating}
                                        text={`${product.numReviews} reviews`}></Rating>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Price:   ${product.price}
                                </ListGroupItem>
                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroupItem>
                                        <Row>
                                            <Col>
                                                Price:
                                            </Col>
                                            <Col> ${product.price}</Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Row>
                                            <Col>
                                                Status:
                                            </Col>
                                            <Col> {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <Button className='btn-block' type='button'
                                            disabled={product.countInStock < 1}
                                        >                                    Add To Cart</Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                )
            }


        </>
    )
}


// ProductScreen.propTypes = {
//     match: PropTypes.number.isRequired
// }

export default ProductScreen
