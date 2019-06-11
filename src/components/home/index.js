import React from 'react'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../actions'
import { ABOUT_PAGE_URL } from '../../helpers/constants'

const Home = props => {
  const {
    count,
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    isIncrementing,
    isDecrementing,
    LinkToAboutPage
  } = props

  return (
    <div>
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
        <button onClick={LinkToAboutPage}>Go to about page via redux</button>
      </p>
    </div>
  )
}

export default connect(
  ({ counter }) => ({
    count: counter.count,
    isIncrementing: counter.isIncrementing,
    isDecrementing: counter.isDecrementing
  }),
  {
    increment,
    incrementAsync,
    decrement,
    decrementAsync,
    LinkToAboutPage: () => push(ABOUT_PAGE_URL)
  }
)(Home)
