import styled from "styled-components"

export const Container = styled.div
`
    ${props => props.flex? 'display: flex;':''}
    ${props => props.inline? 'display: inline-flex;':''}
    flex-direction: ${props => props.direction? props.direction: 'column'};
    height:${props => props.height? props.height: 'auto'};
    width: 350px;
    background-color: ${props => props.background};
    justify-content:${props => props.justify? props.justify:'flex-start'};
    margin: auto;
    ${props => props.paddingBottom? 'padding-bottom: '+props.paddingBottom: ''};
    ${props => props.marginBottom? 'margin-bottom: '+props.marginBottom: ''};
`

export const Item = styled.div
`
    flex-grow: ${props => props.grow};
    ${props => props.height? 'height: '+props.height: ''};
    ${props => props.marginLeft? 'margin-left: '+props.marginLeft: ''};
    ${props => props.marginRight? 'margin-right: '+props.marginRight: ''};
    ${props => props.textAlign? 'text-align: '+props.textAlign: ''};
    ${props => props.paddingBottom? 'padding-bottom: '+props.paddingBottom: ''};
    ${props => props.paddingLeft? 'padding-left: '+props.paddingLeft: ''};
    ${props => props.paddingRight? 'padding-right: '+props.paddingRight: ''};
    ${props => props.paddingTop? 'padding-top: '+props.paddingTop: ''};
    ${props => props.padding? 'padding: '+props.padding: ''};
    ${props => props.borderRadius? 'border-radius: '+props.borderRadius: ''};
`

export const Image = styled.img
`
    width: 100%;
    height: 100%;
`

export const Button = styled.button
`
    ${props => props.color? 'background-color: '+props.color: ''}
    border-radius: 6px;
    width: 145px;
    height: 40px;
    border: 1px solid #47525E;
`

export const Text = styled.text
`
    font-family: Verdana, Helvetica, sans-serif;
    ${props => props.color? 'color: '+props.color: ''};
    ${props => props.fontSize? 'font-size: '+props.fontSize: ''};
`