import React, {Component} from "react"
import {Container, Button} from "./filterbuttons.style";

export class FilterButtons extends Component {
    render () {
        if (!this.props.newcustomer) {
            return (
                <Container flex direction={"row"} marginBottom={"25px"}>
                    <Button color={"#8090A5"} fontColor = {"white"} onClick = {this.props.clickButtonA}>All promotions</Button>
                    <Button color={"white"} fontColor = {"#8090A5"} onClick = {this.props.clickButtonA}>New customers</Button>
                </Container>       
            );
        }

        else if (this.props.newcustomer) {
            return (
                <Container flex direction={"row"} marginBottom={"25px"}>
                    <Button color={"white"} fontColor = {"#8090A5"} onClick = {this.props.clickButtonA}>All promotions</Button>
                    <Button color={"#8090A5"} fontColor = {"white"} onClick = {this.props.clickButtonA}>New customers</Button>
                </Container>       
            );
        } 
    }
}