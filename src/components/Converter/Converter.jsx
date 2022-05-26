import React from "react";

const Converter = (props) => {

  return <div>

    <select name="currency" id="currency-select" value={props.selectCurrency} onChange={(e) => {
      props.onChangeCurrency(e)
    }}>
      {props.currency.filter(e => e.cc === "USD" || e.cc === "EUR" || e.cc === "UAH").map(e => {
          return <option key={e.rate} value={e.cc}>{e.cc}</option>
        }
      )}
    </select>
    <input type="number" placeholder="Input value" value={props.value} onChange={e => props.onChangeValue(e)}/>
  </div>
}

export default Converter;