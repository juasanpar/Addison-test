import styled from "styled-components"

export const Container = styled.div
`
    margin: auto;
    width: 350px;
    ${props => props.flex? 'display: flex;':''}
    flex-direction: ${props => props.direction? props.direction: 'column'};
    ${props => props.marginBottom? 'margin-bottom: '+props.marginBottom: ''};
    justify-content:${props => props.justify? props.justify:'flex-start'};
`

export const Button = styled.button
`
    border-radius: 6px;
    position: relative;
    display: inline-block;
    width: 175px;
    height: 25px;
    border: 1px solid #8090A5;
    ${props => props.color? 'background-color: '+props.color: ''}
    ${props => props.fontColor? 'color: '+props.fontColor: ''}
`