import React, {useRef} from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const FileInput = ({onChange, name, setState, placeholder, required}) => {
  const inputRef = useRef();

  const onFileChange = e => {
    if (e.target.files[0]) {
      setState(prev => ({...prev, [name]: e.target.files[0].name}))
    }
    onChange(e);
  };

  const activateInput = () => {
    inputRef.current.click();
  };

  return (
    <div>
      <input
        type="file"
        name={name}
        onChange={onFileChange}
        ref={inputRef}
        style={{display: 'none'}}
      />
      <div style={{position: 'relative', display: 'inline-block', margin: '20px 0'}}>
          <input
              required={required}
              onClick={activateInput}
              placeholder={placeholder || 'добавьте файл'}
              style={{
                color: 'var(--text-background-color)',
                backgroundColor: 'var(--background-color)',
                padding: '20px 10px',
                borderRadius: '20px',
                border: 'none',
                boxShadow: '5px 5px 5px -5px rgba(34, 60, 80, 0.6) inset',
                width: '100%',
                cursor: 'pointer'
              }}
          />
        <AttachFileIcon
            onClick={activateInput}
            style={{position: 'absolute', top: '15px', right: '13px', cursor: 'pointer'}}
        />
      </div>
    </div>
  );
};

export default FileInput;