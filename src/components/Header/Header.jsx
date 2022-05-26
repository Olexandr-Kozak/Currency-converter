import React from 'react';
import s from '../../style.module.css'

const Header = (props) => {
  return (
    <div className={s.header}>
      <h1 className={s.h1}>Amazing Corency Convertor</h1>
      <ul>
        {props.currency.filter(e => e.cc === "USD" || e.cc === "EUR").map(e => {
          return (
            <li key={e.r030}>{e.txt} : {e.rate}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Header;