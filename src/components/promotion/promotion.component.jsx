import React, {Component} from "react"
import {Container, Item, Image, Button, Text} from "./promotion.style"

export class Promotion extends Component{
    render(){
        return(  
        <Container flex direction={"column"} height={"400px"} marginBottom={"50px"}>
            <Item grow={0.4} height={"200px"}>
                <Image src={this.props.imgSrc} />
            </Item>
            <Item grow={0.6} height={"200px"}>
                <Container background={"#F2F2F2"}>
                    <Item textAlign = {"center"} paddingTop = {"10px"} paddingBottom = {"10px"}>
                        <Text fontSize = {"25px"}>{this.props.title}</Text>
                    </Item>
                    <Item paddingBottom = {"25px"} paddingLeft = {"10px"} paddingRight = {"10px"}>
                        <Text fontSize = {"12px"}>{this.props.description}</Text>
                    </Item>
                    <Item>
                        <Container inline direction={"row"} justify={"space-between"}>
                            <Item paddingBottom = {"12px"} paddingLeft = {"20px"}><Button color={"#F2F2F2"}><Text>{this.props.termAndConditions}</Text></Button></Item>
                            <Item paddingBottom = {"12px"} paddingRight = {"20px"}><Button color={"#47525E"}><Text color = {"white"}>{this.props.joinProm}</Text></Button></Item>                                
                        </Container>
                    </Item>
                </Container>
            </Item>
        </Container>);
    }
}
                                                                                                                                                                                                            