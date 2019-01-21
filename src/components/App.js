import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import NewTweet from './NewTweet'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Tweet from './Tweet'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
            <LoadingBar />
            <div className='container'>
              <Nav />
              {this.props.loading === true
                ? null
                : (<div className = 'container'>
                    <Route path='/' exact component={Dashboard} />
                    <Route path='/tweet/:id' component={Tweet} />
                    <Route path='/new' component={NewTweet} />
                </div>)}
            </div>
        </Fragment>  
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
