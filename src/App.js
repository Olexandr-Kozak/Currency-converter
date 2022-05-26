import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import BodyContainer from "./components/Converter/ConverterContainer";
import s from "./style.module.css"

function App() {
  return (
    <div className={s.container}>
      <HeaderContainer/>
      <BodyContainer/>
    </div>
  );
}

export default App;
