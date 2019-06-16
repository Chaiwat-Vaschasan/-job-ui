import React, { Component } from 'react'
import { Container, Row, Col ,NavLink } from 'reactstrap';
import bootstarp from '../images/bootstrap.svg'
import react from '../images/react.svg'
import dotnet from '../images/dotnet.png'
import vscode from '../images/vscode.png'
export default class FooterComponent extends Component {
    render() {
        return (
            <Container className="bg-light" fluid>
                <Container >
                    <Row>
                        <Col>
                            <br />
                            <NavLink href="https://reactjs.org/">
                                <span> <img src={react} alt="react" width={20} height={20} /> </span>
                                Create With Rract
                            </NavLink>
                            <NavLink href="https://reactstrap.github.io/">
                                <span> <img src={bootstarp} alt="bootsparp" width={20} height={20} /> </span>
                                Use Reactstrap Component
                            </NavLink>
                        </Col>
                        <Col>
                            <br />
                            <NavLink href="https://dotnet.microsoft.com/">
                                <span> <img src={dotnet} alt="dotnet" width={20} height={20} /> </span>
                                Create Backend Whit .Net Core
                            </NavLink>
                            <NavLink href="https://code.visualstudio.com/">
                                <span> <img src={vscode} alt="vscode" width={21} height={21} /> </span>
                                Use Visual Studio Code
                            </NavLink>
                        </Col>
                    </Row>
                </Container>
            </Container>

        )
    }
}
