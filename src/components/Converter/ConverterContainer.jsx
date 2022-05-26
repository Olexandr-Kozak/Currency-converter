import React from "react";
import {connect} from "react-redux";
import {
  setInputCurrency, setInputRate,
  setInputValue,
  setOutputCurrency,
  setOutputRate,
  setOutputValue
} from "../../redux/main-reducer";
import Converter from "./Converter";
import s from "../../style.module.css"

class ConverterContainer extends React.Component {

  onChangeInputCurrency = (e) => {
    let inputCurrency = e.target.value;
    let {rate} = this.props.currency.find(n => n.cc === inputCurrency);
    let inputRate = rate;
    this.props.setInputRate(inputRate);
    this.props.setInputCurrency(inputCurrency);

    let inputValue = this.props.outputValue / inputRate * this.props.outputRate
    this.props.setInputValue(inputValue.toFixed(2))
  }

  onChangeOutputCurrency = (e) => {
    let outputCurrency = e.target.value;
    let {rate} = this.props.currency.find(n => n.cc === outputCurrency);
    let outputRate = rate;
    this.props.setOutputCurrency(outputCurrency);
    this.props.setOutputRate(outputRate);

    let outputValue = this.props.inputValue / outputRate * this.props.inputRate
    this.props.setOutputValue(outputValue.toFixed(2))
  }

  onChangeInputValue = (e) => {
    let inputValue = parseInt(e.target.value);
    this.props.setInputValue(inputValue);

    let outputValue = inputValue / this.props.outputRate * this.props.inputRate
    this.props.setOutputValue(outputValue.toFixed(2))
  }

  onChangeOutputValue = (e) => {
    let outputValue = parseInt(e.target.value);
    this.props.setOutputValue(outputValue);

    let inputValue = outputValue / this.props.inputRate * this.props.outputRate
    this.props.setInputValue(inputValue.toFixed(2))
  }

  render() {
    return (
      <div className={s.main}>
        <div className={s.converterRow}>
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
        <div className={s.equal}>=</div>
        <div className={s.converterRow}>
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
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    inputValue: state.main.inputValue,
    outputValue: state.main.outputValue,
    inputCurrency: state.main.inputCurrency,
    outputCurrency: state.main.outputCurrency,
    currency: state.main.currency,
    outputRate: state.main.outputRate,
    inputRate: state.main.inputRate
  }
}

export default connect(mapStateToProps, {
  setInputCurrency, setInputRate,
  setInputValue,
  setOutputCurrency,
  setOutputRate,
  setOutputValue
})(ConverterContainer)