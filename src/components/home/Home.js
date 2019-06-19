import React from 'react'
import {Button} from 'antd'
import Header from '../shared/Header'
import TopGrid from '../shared/TopGrid'

import './sytle/home.css'

function Home(props) {
  const {
    count,
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    isIncrementing,
    isDecrementing,
  } = props

  return (
    <TopGrid>
      <Header />
      <h1>Home</h1>
      <p>Count: {count}</p>

      <p>
        <Button type="primary" onClick={increment}>
          Increment
        </Button>
        <Button type="danger" onClick={incrementAsync} disabled={isIncrementing}>
          Increment Async
        </Button>
      </p>

      <p>
        <Button type="primary" onClick={decrement}>
          Decrement
        </Button>
        <Button type="danger" onClick={decrementAsync} disabled={isDecrementing}>
          Decrement Async
        </Button>
      </p>
    </TopGrid>
  )
}

export default Home
