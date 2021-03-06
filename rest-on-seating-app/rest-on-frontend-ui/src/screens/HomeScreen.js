import { Col, Row } from 'react-bootstrap'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Loader from '../components/Loader'
import Message from '../components/Message'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);


    return (
        <>
            <h1>Latest Products</h1>
            {loading ?
                (<Loader>Loading ... </Loader>
                ) : error ? (
                    <Message variant='danger'>{error}</Message>
                ) : (
                    <Row>
                        {products.map((product) => (
                            <Col sm={12} md={6} lg={4} key={product._id}>
                                <Product product={product}></Product>
                            </Col>
                        ))}
                    </Row>)}

        </>
    )
}

export default HomeScreen
