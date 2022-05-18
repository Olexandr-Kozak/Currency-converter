import React from "react";
import Converter from "./Converter/Converter";

const Body = (props) => {

  return (
    <>
      <div>
        <Converter  onChangeCurrency={(e) => {props.onChangeInputCurrency(e)}}
                    onChangeValue={(e) => {props.onChangeInputValue(e)}}
                    value={props.inputValue}
                    currency={props.currency}
                    selectCurrency={props.inputCurrency}
        />
      </div>
      <div>
        <Converter  onChangeCurrency={(e) => {props.onChangeOutputCurrency(e)}}
                    onChangeValue={(e) => {props.onChangeOutputValue(e)}}
                    value={props.outputValue}
                    currency={props.currency}
                    selectCurrency={props.outputCurrency}
        />
      </div>
    </>
  )
}

export default Body;