const SET_CURRENCY = 'SET_CURRENCY';
const SET_INPUT_CURRENCY = "SET_INPUT_CURRENCY";
const SET_OUTPUT_CURRENCY = "SET_OUTPUT_CURRENCY";
const SET_OUTPUT_VALUE = "SET_OUTPUT_VALUE";
const SET_INPUT_VALUE = "SET_INPUT_VALUE";

// const UAH_USD = "UAH_USD";


let initialState = {
  currency: [
    // {
    //   "r030":840,"txt":"Долар США","rate":29.2549,"cc":"USD","exchangedate":"16.05.2022"
    // },
    // {
    //   "r030":978,"txt":"Євро","rate":30.3768,"cc":"EUR","exchangedate":"16.05.2022"
    // }
  ],
  uah: [
    {
      "r030": 101, "txt": "Гривня", "rate": 1.0000, "cc": "UAH", "exchangedate": "16.05.2022"
    }
  ],
  inputValue: 100,
  outputValue: 3000,
  inputCurrency: "UAH",
  outputCurrency: "USD"
};

const reducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.currency
      }

    case SET_INPUT_CURRENCY:
      return {
        ...state,
        inputCurrency: action.inputCurrency
      }
    case SET_OUTPUT_CURRENCY:
      return {
        ...state,
        outputCurrency: action.outputCurrency
      }
    case SET_OUTPUT_VALUE:
      return {
        ...state,
        outputValue: action.outputValue
      }
    case SET_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.inputValue
      }
    // case UAH_USD:
    //   return {
    //     ...state,
    //     outputValue: action.output,
    //     inputValue: action.input
    //   }
    default:
      return state;
  }

};
// debugger;
export const setCurrencyAC = (currency) => ({type: SET_CURRENCY, currency});
export const setInputCurrencyAC = (inputCurrency) => ({type: SET_INPUT_CURRENCY, inputCurrency});
export const setOutputCurrencyAC = (outputCurrency) => ({type: SET_OUTPUT_CURRENCY, outputCurrency});
export const setInputValueAC = (inputValue) => ({type: SET_INPUT_VALUE, inputValue});
export const setOutputValueAC = (outputValue) => ({type: SET_OUTPUT_VALUE, outputValue});


export default reducer;