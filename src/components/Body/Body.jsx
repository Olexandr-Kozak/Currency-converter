import React from "react";

const Body = (props) => {
  // debugger
  console.log(props.inputCurrency)
  console.log(props.outputCurrency)
  console.log(props.inputValue)
  console.log(props.outputValue)
  return (
    <div>
      --------------------BODY-------------------------------
      {/*{props.inputValue}*/}
      <div className="">
        <input type="text" placeholder="Input value" value={props.inputValue} onChange={(e) => {props.onChangeInputValue(e)}} />
        <label htmlFor="currency">Choose currency: </label>
        <select name="currency" id="currency-select" defaultValue={props.inputCurrency} onChange={(e) => {props.onChangeInputCurrency(e)}} >
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
      <div className="">
        <input type="text" placeholder="Output value" value={props.outputValue} onChange={(e) => {props.onChangeOutputValue(e)}}/>
        <label htmlFor="currency">Choose currency: </label>
        <select name="currency" id="currency-select" defaultValue={props.outputCurrency} onChange={(e) => {props.onChangeOutputCurrency(e)}}>
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="UAH">UAH</option>
        </select>
      </div>
    </div>
  )
}

export default Body;