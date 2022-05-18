import React from 'react';

const Header = (props) => {
  return (
    <div>
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