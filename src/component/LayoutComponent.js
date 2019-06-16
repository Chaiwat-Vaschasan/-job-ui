import React, { Component } from 'react'
import Navbar from './NavbarComponent'
import Footer from './FooterComponent'
import '../css/layout.css'
export default class LayoutComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        container: "container"
      }
    }
    componentDidMount(){
        if(this.props.container != null){
            this.setState({
                container: this.props.container
            })
        }
    }
    
    render() {
        return (
            <div>
                <Navbar />
                <div className="Top"></div>
                <div className={this.state.container}>
                    {this.props.children}
                </div>
                <div className="Bottom"></div>
                <Footer />
            </div>
        )
    }
}
