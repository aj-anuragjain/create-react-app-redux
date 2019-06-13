import React from 'react'
import Header from '../shared/Header'

import './sytle/home.css'

const Home = props => {
  const {
    count,
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    isIncrementing,
    isDecrementing,
    linkToAboutPage
  } = props

  return (
    <div>
      <Header />
      <h1>Home</h1>
      <p>Count: {count}</p>

      <p>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementAsync} disabled={isIncrementing}>
          Increment Async
        </button>
      </p>

      <p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={decrementAsync} disabled={isDecrementing}>
          Decrement Async
        </button>
      </p>

      <p>
        <button onClick={linkToAboutPage}>Go to about page via redux</button>
      </p>
    </div>
  )
}

export default Home
