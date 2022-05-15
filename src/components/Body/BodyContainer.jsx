import React from "react";
import Body from "./Body";
import {connect} from "react-redux";
import {setInputCurrencyAC, setInputValueAC, setOutputCurrencyAC, setOutputValueAC} from "../../redux/header-reducer";

class BodyContainer extends React.Component {

  // changeConvertToCurrency(e) {
  //   this.setState({
  //     outputCurrency: e.target.value
  //   });
  // }
  //
  onChangeInputCurrency = (e) => {
    let inputText = e.target.value;
    this.props.setChangeInputCurrency(inputText);
  }

  onChangeOutputCurrency =(e)=> {
    let outputText = e.target.value;
    this.props.setChangeOutputCurrency(outputText);
  }
  onChangeInputValue=(e)=>{
    let inputValue = e.target.value;
    this.props.setChangeInputValue(inputValue);
  }
  onChangeOutputValue=(e)=>{
    let outputValue = e.target.value;
    this.props.setChangeOutputValue(outputValue);
  }

  render() {
    // debugger
    return (
      <Body inputValue={this.props.inputValue}
            outputValue={this.props.outputValue}
            inputCurrency={this.props.inputCurrency}
            outputCurrency={this.props.outputCurrency}
            onChangeInputCurrency={this.onChangeInputCurrency}
            onChangeOutputCurrency={this.onChangeOutputCurrency}
            onChangeInputValue={this.onChangeInputValue}
            onChangeOutputValue={this.onChangeOutputValue}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    inputValue: state.header.inputValue,
    outputValue: state.header.outputValue,
    inputCurrency: state.header.inputCurrency,
    outputCurrency: state.header.outputCurrency

  }
}
let mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    setChangeInputCurrency: (inputText) => {
      dispatch(setInputCurrencyAC(inputText))
    },
    setChangeOutputCurrency: (outputText) => {
      dispatch(setOutputCurrencyAC(outputText))
    },
    setChangeInputValue: (inputValue) => {
      dispatch(setInputValueAC(inputValue))
    },
    setChangeOutputValue: (outputValue) => {
      dispatch(setOutputValueAC(outputValue))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer)