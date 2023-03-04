import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from "tss-react/mui";

const FormInput = ({ type, name, value, onChange, placeholder, required, error, multiline }) => {
    const useStyles = makeStyles()(() => ({
        inputStyles: {
            fontSize: '1rem',
            lineHeight: '1.5',
            color: '#495057',
            backgroundColor: 'white',
            margin: '0.375rem 0',
            backgroundClip: 'padding-box',
            padding: '0.375rem 0.75rem',
            marginBottom: '30px',
            borderRadius: '0.25rem',
            height: multiline ? '70px' : '20px',
            display: 'block',
            width: '100%',
            transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
            '&:focus-visible': {
                boxShadow: '0 0 0 0.2rem rgb(0 123 255 / 25%)'
            }
        }

    }));
    const { classes } = useStyles();
    return (
        <>
            <input
                type={type}
                required={required}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={error ? error : placeholder}
                className={classes.inputStyles}
                style={{border: error ? '1px solid red' : '1px solid #6B0505'}}
            />
        </>
    );
};

FormInput.propTypes = {
  required: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default FormInput;
