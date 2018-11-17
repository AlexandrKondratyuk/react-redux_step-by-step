import React, {Component} from 'react'
import {connect} from 'react-redux'
import './App.scss'
import Counter from './Counter'
import {add, addNumber, sub} from "./redux/actions/actions";

class App extends Component {

  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>

        <hr/>

        <div className="Actions">
          <button onClick={this.props.onAdd}>Add 1</button>
          <button onClick={this.props.onSub}>Subtract 1</button>
        </div>
          <div className="Actions">
              <button onClick={this.props.onAddNumber.bind(this, 5)}>Add 5</button>
              <button onClick={() => this.props.onAddNumber(-7)}>Subtract 7</button>
          </div>
          <Counter />
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNumber: number => dispatch(addNumber(number)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
