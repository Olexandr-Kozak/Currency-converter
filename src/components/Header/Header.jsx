import React from 'react';

const Header = (props) => {

  // console.log(props.currency)
  return (
    <div>
      {props.currency.filter(e => e.cc === "USD" || e.cc === "EUR").map(e => {
        return (
          <li key={e.r030}>{e.txt} : {e.rate}</li>
      )
      })}
    </div>
  )

}

export default Header;