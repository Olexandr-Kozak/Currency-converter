

let initialState = {
  inputValue: 100,
  outputValue: 0,
  selectInputCurrency: "UAH",
  selectOutputCurrency: "USD"
};

const bodyReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_INPUT_VALUE:
      return{
        ...state
      }
    case SET_OUTPUT_VALUE:
      return{
        ...state
      }
    case UAH_USD:
      return {
        ...state,
        outputValue: action.output,
        inputValue: action.input
      }
    default:
      return state;
  }
}

export const setInputValue = (inputValue) => ({type: SET_INPUT_VALUE, inputValue});
export const setOutputValue = (outputValue) => ({type: SET_OUTPUT_VALUE, outputValue});
export const calcUahToUsd = () => ({type: UAH_USD, })

export default bodyReducer;