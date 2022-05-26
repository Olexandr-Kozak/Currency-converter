import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import * as axios from "axios";
import {setCurrency} from "../../redux/main-reducer";

class HeaderContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`)
      .then(response => {
        this.props.setCurrency(response.data)
      });
  }

  render() {
    return <Header currency={this.props.currency}/>
  }
}

let mapStateToProps = (state) => {
  return {
    currency: state.main.currency
  }
}

export default connect(mapStateToProps, {setCurrency})(HeaderContainer)