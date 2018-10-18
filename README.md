# Addison Global Web Technical Assesement

## Introduction and Technologies.

For the task, I decided to use React, as you encouraged to use it in the assesment statement and it is used at Addison's web development. I have also made use of the React library 'styled-components', which allows to write CSS code inside a React component.

As I told in our interview last Friday, I had no previous knowledge of React and little knowledge of HTML, CSS and Javascript before starting working in this test, so I have had to read documentations, tutorials and search for some issues at StackOverflow to perform this task properly. When I got into React and I begun to understand how it works, I found that it is a very intuitive technology and makes it a lot simpler to code a front-end solution, making the combination of Javascript code with HTML extremely satisfying and really clear to read and understand what is happening. I feel I have a long way to go with it, but as a start I'm very satisfied with the experience and the result I got. These links were extremely helpful:

* https://reactjs.org/tutorial/tutorial.html#setup-for-the-tutorial
* https://css-tricks.com/snippets/css/a-guide-to-flexbox/
* https://www.styled-components.com/docs/api
* https://carlosazaustre.es/consumiendo-un-api-rest-desde-react-js-con-ecmascript6/

## Solution.

For solving the task you have proposed me, using React's component based aproach I identified three main components: one for the whole app, one for each of the promotions, and another one for the filter buttons on the top of the view. So, if we take a look at the folder hierarchy, we have this:

* **index.js**: it renders the whole application.
* **app.js**: it brings together all the components and provides for all the functions that make the applicaction work, such as consuming the API, displaying all the promotions and managing the buttons on the top. This is the main App component.
* **components**:
    * **promotion**:
        * **index.js**: it is in charge of exporting all the classes and consts of the folder.
        * **promotion.component.jsx**: this is where the promotion component is created
        * **promotion.style.jsx**: this is where the promotion style (CSS) is managed. 
    * **filterButtons**:
        * **index.js**: it is in charge of exporting all the classes and consts of the folder.
        * **filterbuttons.component.jsx**: this is where the filter buttons component is created
        * **filterbuttons.style.jsx**: this is where the filter buttons style (CSS) is managed. 

The scripts promotion.style.jsx and filterbutton.style.jsx are the ones where we are making use of the library 'styled-components'. Here, we are declaring a constant for each one of the parts that we want the component to have, giving it an HTML tag value. For example, here we can see one of these consts:

```js
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
```

We can see that all the parts of the component that will have the tag "Container" will be translated in a HTML div tag (due to styled.div line). Also, we can see that there are some CSS atributes set directly and some other that are set using React's 'props'. This mean that all the Containers in the component will have the CSS atributes that are directly set, but the ones that are declared with the props will be present only on the Containers we want them to be.

Now, let's take a look at the promotions.component.jsx script:

```js
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
```

Each one of the parts of the Promotion components are enclosed in the 'tags' we have defined in the style.jsx script. Some of them have some props regarding the CSS atributes we want to have in each tag. For both HTML and CSS I have to say that it was trial and error as my knowledge on the matter is short. CSS was specially unpredictable for me and I tried adjusting the different atributes until I got the result I wanted. I have probably not taken the best aproach to solve the task but anyway I got the design close to what you showed me.

The last part I wanted to have a word on is the app.js script. Here, I use the class constructor to store all the promotions and the newCustomers option as class states. Then, with the function 'componentWillMount()' the API call is performed and the data from the JSON is retrieved and set at the class promotions state. Finally, in the render function, the promotions are filtered according to the 'newCustomers' state, that is changed using the 'handleClick' function, then they are sorted according to the sequence number and rendered with the Promotion component, having the FilterButton component on the top.

## Test.

For running the applitacion, the steps are:

* Making sure node.js is installed in the system.
* Having Intenet connection in order to perform the API call.
* In the root folder of the project, running the command 'npm start'.
* Then, a browser tab will pop-up. If not, the application is running in http://localhost:3000/.

