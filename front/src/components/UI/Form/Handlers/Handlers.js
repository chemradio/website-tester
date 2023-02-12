
export const inputChangeHandler = (e, setState) => {
  const { name, value } = e.target
  return setState(prev => ({ ...prev, [name]: value }))
}

export const inputChangeHandlerChecked = (e, setState) => {
  const name = e.target.name
  const value = e.target.checked
  return setState(prev => ({ ...prev, [name]: value }))
}


export const submitFormHandler = (e, fetch) => {
  e.preventDefault()
  return fetch
}

export const getFieldError = (error, fieldName) => {
  try {
    return error.errors ? error.errors[fieldName].message : error.message
  } catch {
    return undefined
  }
}

export const submitFormDataHandler = data => {
  const formData = new FormData()
  Object.keys(data).forEach(key => {
    formData.append(key, data[key])
  })
  return formData;
}