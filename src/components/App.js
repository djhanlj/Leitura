import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions'
import Home from './Home'
import Navbar from './CustomNavBar'
import PostDetail from './PostDetail'
import CategoryForm from './forms/CategoryForm'
import PostForm from './forms/PostForm'
import NotFoundPage from './NotFoundPage'
import LoadingBar from 'react-redux-loading'

class App extends Component {

  componentWillMount() {
    const { loadData } = this.props
    loadData()
  }

  render() {
    const { categories } = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Navbar categories={categories} />
          <Switch>
            <Route exact path="/:category?" component={Home} />
            <Route path={`/category/create`} component={CategoryForm} />
            <Route path={`/post/create`} component={PostForm} />
            <Route path={`/post/edit/:post_id`} component={PostForm} />
            <Route path={`/:category/:post_id`} component={PostDetail} />
            <Route component={NotFoundPage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: () => dispatch(handleInitialData()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
