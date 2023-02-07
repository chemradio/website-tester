import React from 'react'
import PropTypes from 'prop-types'
import {TextField} from "@mui/material";

const FormInput = ({ type, name, value, onChange, placeholder, required, error, multiline }) => (
  <>
      <TextField
          multiline={multiline}
          rows={4}
          variant="outlined"
          type={type}
          required={required}
          name={name}
          value={value}
          onChange={onChange}
          error={Boolean(error)}
          helperText={error}
          color="secondary"
          placeholder={placeholder}
          style={{margin: '20px 0', color: 'rgba(255, 255, 255, 0.5)'}}
      />
  </>
)

FormInput.propTypes = {
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
}

export default FormInput
