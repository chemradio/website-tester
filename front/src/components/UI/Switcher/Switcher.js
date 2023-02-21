import React, { useState } from 'react'
import './Swither.scss'

const Switcher = ({ value, seChange }) => {
  const [switcher, setSwitcher] = useState(value);

  const changeSwitcher = e => {
    setSwitcher(e)
    seChange(e)
  }
  return (
    <button
      type="button"
      className={switcher === true ? 'switch-btn switch-on' : 'switch-btn'}
      onClick={() => changeSwitcher(!switcher)}
    />
  )
}

export default Switcher
