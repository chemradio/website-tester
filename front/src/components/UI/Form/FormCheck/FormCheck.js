import React from 'react'
import './FormCheck.scss'

const FormCheck = ({ onChange, name, checked }) => (
  <>
    <input type="checkbox" className="check" onChange={onChange} name={name} checked={checked}/>
  </>
)

export default FormCheck
