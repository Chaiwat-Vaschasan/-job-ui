import React, { Component } from 'react'
import Layout from './LayoutComponent'
import { UncontrolledCarousel } from 'reactstrap';
import '../css/home.css'
export default class HomeComponent extends Component {
  render() {
    const items = [
      {
        src: 'https://www.betterteam.com/i/job-descriptions-960x480-20171117.png',
        altText: '',
        caption: ''
      },
      {
        src: 'https://nguonhocbong.com/wp-content/uploads/resume.jpg',
        altText: '',
        caption: ''
      },
      {
        src: 'https://www.rainmakers.co/blog/wp-content/uploads/2018/03/tech-sales-job-description-image-1030x618.jpg',
        altText: '',
        caption: ''
      }
    ]
    return (
      <Layout>
        <UncontrolledCarousel items={items} className="HomeCarousel"/>
      </Layout>
    )
  }
}
