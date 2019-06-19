import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Home from '../components/home/Home'
import {increment, incrementAsync, decrement, decrementAsync} from '../actions'

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
