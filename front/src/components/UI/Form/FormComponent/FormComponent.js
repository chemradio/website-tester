import React from 'react'
import FormInput from '../FormInput/FormInput'
import {getFieldError} from "../Handlers/Handlers";
import {Button} from "@mui/material";

const FormComponent = ({
  title,
  label,
  inputName,
  inputType,
  submit,
  value,
  onChange,
  typeForm,
  placeholderName,
  error,
  disabled,
}) => {
  let form = null

  if (inputName) {
    form = inputName.map((name, index) => (
        <div key={name[index]}>
          <label>{label[index]}</label>
          <FormInput
            type={inputType[index]}
            placeholder={placeholderName[index]}
            name={name}
            value={value[name]}
            onChange={onChange}
            error={getFieldError(error, name)}
            className="form_input"
          />
        </div>
    ))
  }
  return (
    <>
      <form onSubmit={submit} className="form">
        <h4 className="form_title">{title}</h4>
        {form}
        <Button disabled={disabled}>{typeForm}</Button>
      </form>
    </>
  )
}

export default FormComponent
