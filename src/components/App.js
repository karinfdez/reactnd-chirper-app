import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        {!!this.props.loading 
        ? null 
        : <Dashboard />}
        
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {   //To connect a comp to Redux store state. 
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App) //In order to get access to dispatch