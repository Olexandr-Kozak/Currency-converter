import React from "react";
import {connect} from "react-redux";
import {
  setInputCurrencyAC, setInputRateAC,
  setInputValueAC,
  setOutputCurrencyAC,
  setOutputRateAC,
  setOutputValueAC
} from "../../redux/header-reducer";
import Converter from "./Converter/Converter";

class BodyContainer extends React.Component {

  onChangeInputCurrency = (e) => {
    let inputCurrency = e.target.value;
    let {rate} = this.props.currency.find(n => n.cc === inputCurrency);
    let inputRate = rate;
    this.props.setInputRate(inputRate);
    this.props.setChangeInputCurrency(inputCurrency);

    let inputValue = this.props.outputValue / inputRate * this.props.outputRate
    this.props.setChangeInputValue(inputValue.toFixed(2))
  }

  onChangeOutputCurrency = (e) => {
    let outputCurrency = e.target.value;
    let {rate} = this.props.currency.find(n => n.cc === outputCurrency);
    let outputRate = rate;
    this.props.setChangeOutputCurrency(outputCurrency);
    this.props.setOutputRate(outputRate);

    let outputValue = this.props.inputValue / outputRate * this.props.inputRate
    this.props.setChangeOutputValue(outputValue.toFixed(2))
  }

  onChangeInputValue = (e) => {
    let inputValue = parseInt(e.target.value);
    this.props.setChangeInputValue(inputValue);

    let outputValue = inputValue / this.props.outputRate * this.props.inputRate
    this.props.setChangeOutputValue(outputValue.toFixed(2))
  }

  onChangeOutputValue = (e) => {
    let outputValue = parseInt(e.target.value);
    this.props.setChangeOutputValue(outputValue);

    let inputValue = outputValue / this.props.inputRate * this.props.outputRate
    this.props.setChangeInputValue(inputValue.toFixed(2))
  }

  render() {
    return (
      <>
        <div>
          <Converter onChangeCurrency={(e) => {
            this.onChangeInputCurrency(e)
          }}
                     onChangeValue={(e) => {
                       this.onChangeInputValue(e)
                     }}
                     value={this.props.inputValue}
                     currency={this.props.currency}
                     selectCurrency={this.props.inputCurrency}
          />
        </div>
        <div>
          <Converter onChangeCurrency={e => {
            this.onChangeOutputCurrency(e)
          }}
                     onChangeValue={(e) => {
                       this.onChangeOutputValue(e)
                     }}
                     value={this.props.outputValue}
                     currency={this.props.currency}
                     selectCurrency={this.props.outputCurrency}
          />
        </div>
      </>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    inputValue: state.header.inputValue,
    outputValue: state.header.outputValue,
    inputCurrency: state.header.inputCurrency,
    outputCurrency: state.header.outputCurrency,
    currency: state.header.currency,
    outputRate: state.header.outputRate,
    inputRate: state.header.inputRate
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    setChangeInputCurrency: (inputCurrency) => {
      dispatch(setInputCurrencyAC(inputCurrency))
    },
    setChangeOutputCurrency: (outputCurrency) => {
      dispatch(setOutputCurrencyAC(outputCurrency))
    },
    setChangeInputValue: (inputValue) => {
      dispatch(setInputValueAC(inputValue))
    },
    setChangeOutputValue: (outputValue) => {
      dispatch(setOutputValueAC(outputValue))
    },
    setOutputRate: (outputRate) => {
      dispatch(setOutputRateAC(outputRate))
    },
    setInputRate: (inputRate) => {
      dispatch(setInputRateAC(inputRate))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BodyContainer)