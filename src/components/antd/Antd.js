import React, { Fragment } from 'react'
import Layout from './Layout'
import Typography from './Typography'
import Carousel from './Carousel'
import { Row, Col } from 'antd'

export default function() {
  return (
    <Fragment>
      <Row>
        <Col
          xs={{ span: 20, offset: 2 }}
          md={{ span: 18, offset: 3 }}
          lg={{ span: 16, offset: 4 }}>
          <Typography />
          <Carousel />
          <Layout />
        </Col>
      </Row>
    </Fragment>
  )
}
