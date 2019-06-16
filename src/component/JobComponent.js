import React, { Component } from 'react'
import Layout from './LayoutComponent'
import JobTable from './JobTableComponent'
import { Spinner } from 'reactstrap';
export default class JobComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      isLoading: false
    }
  }
  async componentDidMount() {
    this.setState({ isLoading: true });

    await fetch('https://localhost:5001/api/Job', {
      headers: {
      
        'apikey':'mykey'
      }
    })
      .then(response => response.json())
      .then(json => this.setState({ data: json, isLoading: false }))
      .then(data => console.log(this.state.data))
      .catch(error => console.error(error))


  }

  render() {
    if (this.state.isLoading) {
      return (
        <Layout>
          <Spinner color="primary" /> Loading
        </Layout>
      )
    }
    return (
      <Layout>
        <JobTable data={this.state.data} />
      </Layout>
    )
  }
}
