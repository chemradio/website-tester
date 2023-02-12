import React from 'react'
import './FormCheck.scss'

const FormCheck = ({ onChange, name }) => (
  <>
    <input type="checkbox" className="check" onChange={onChange} name={name}/>
  </>
)

export default FormCheck
