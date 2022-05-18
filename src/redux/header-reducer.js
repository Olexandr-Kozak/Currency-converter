const SET_CURRENCY = 'SET_CURRENCY';
const SET_INPUT_CURRENCY = "SET_INPUT_CURRENCY";
const SET_OUTPUT_CURRENCY = "SET_OUTPUT_CURRENCY";
const SET_OUTPUT_VALUE = "SET_OUTPUT_VALUE";
const SET_INPUT_VALUE = "SET_INPUT_VALUE";
const SET_OUTPUT_RATE = "SET_OUTPUT_RATE";
const SET_INPUT_RATE = "SET_INPUT_RATE";

let initialState = {
  currency: [
    {
      "r030": 101, "txt": "Гривня", "rate": 1.0000, "cc": "UAH", "exchangedate": "16.05.2022"
    }
    // {
    //   "r030":840,"txt":"Долар США","rate":29.2549,"cc":"USD","exchangedate":"16.05.2022"
    // },
    // {
    //   "r030":978,"txt":"Євро","rate":30.3768,"cc":"EUR","exchangedate":"16.05.2022"
    // }
  ],
  inputValue:  1.00,
  outputValue:  1.00,
  inputCurrency: "UAH",
  outputCurrency: "UAH",
  inputRate: 1,
  outputRate: 1
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currency: [...state.currency, ...action.currency]
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
    case SET_OUTPUT_RATE:
      return {
        ...state,
        outputRate: action.outputRate
      }
    case SET_INPUT_RATE:
      return {
        ...state,
        inputRate: action.inputRate
      }
    default:
      return state;
  }
};
export const setCurrencyAC = (currency) => ({type: SET_CURRENCY, currency});
export const setInputCurrencyAC = (inputCurrency) => ({type: SET_INPUT_CURRENCY, inputCurrency});
export const setOutputCurrencyAC = (outputCurrency) => ({type: SET_OUTPUT_CURRENCY, outputCurrency});
export const setInputValueAC = (inputValue) => ({type: SET_INPUT_VALUE, inputValue});
export const setOutputValueAC = (outputValue) => ({type: SET_OUTPUT_VALUE, outputValue});
export const setOutputRateAC = (outputRate) => ({type: SET_OUTPUT_RATE, outputRate});
export const setInputRateAC = (inputRate) => ({type: SET_INPUT_RATE, inputRate});

export default reducer;

