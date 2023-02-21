import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({ type, name, value, onChange, placeholder, required, error, multiline }) => (
  <>
      <input
          type={type}
          required={required}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
              color: 'var(--text-background-color)',
              backgroundColor: 'var(--background-color)',
              padding: '20px 10px',
              borderRadius: '20px',
              border: 'none',
              boxShadow: '5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset',
              width: '50%',
              height: multiline ? '70px' : '20px'
      }}
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
