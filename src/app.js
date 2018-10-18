import React, {Component} from "react"
import {Promotion, FilterButtons} from "./components"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {promotions: [], newCustomers: false}

        this.handleClick = this.handleClick.bind(this);
    }
    
    //Handle the filter buttons click
    handleClick() {
        this.setState(prevState => ({
            newCustomers: !prevState.newCustomers
        }));
    }
    
    //API consumption
    componentWillMount() {
        fetch('http://www.mocky.io/v2/5bc3b9cc30000012007586b7')
            .then((response) => {
            return response.json()
            })
            .then((promotions) => {
            this.setState({promotions: promotions})
            })
    }

    render(){
        let promotionsData;

        if(this.state.newCustomers){
            promotionsData = this.state.promotions.filter(item => item.onlyNewCustomers);
        }else{
            promotionsData = this.state.promotions;
        }

        promotionsData.sort(function(a, b){return a.sequence - b.sequence});

        let promotions = promotionsData.map(item => <Promotion imgSrc = {item.heroImageUrl} title = {item.name} 
            description = {item.description} termAndConditions = {item.termsAndConditionsButtonText} joinProm = {item.joinNowButtonText}/>)

        return(
            <>
                <FilterButtons newcustomer={this.state.newCustomers} clickButtonA = {this.handleClick}/>
                {promotions}
            </>
        )
    }
}