import React from "react";
import {useRef, useState} from "react";
import {Link, TextField} from "@mui/material";
import {makeStyles} from "tss-react/mui";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const useStyles = makeStyles()(() => ({
    input: {
        display: "none",
    }
}));

const FileInput = ({onChange, name, placeholder, required, error}) => {
    const {classes} = useStyles();
    const inputRef = useRef();
    const [linkShow, setLinkShow] = useState(false);
    const [filename, setFilename] = useState('');

    const onFileChange = e => {
        if (e.target.files[0]) {
            setFilename(e.target.files[0]);
            setLinkShow(true);
        } else {
            setFilename('');
        }

        onChange({ target: { name, value: e.target.files[0] } });
    };

    const activateInput = () => {
        inputRef.current.click();
    };

    return (
        <div style={{position: 'relative'}}>
            <input
                type="file"
                name={name}
                className={classes.input}
                onChange={onFileChange}
                ref={inputRef}
            />
            {linkShow === false ?
                <>
                    <TextField
                        required={required}
                        color="secondary"
                        focused
                        margin="normal"
                        placeholder={'Вставьте файл'}
                        value={filename}
                        onClick={activateInput}
                        error={Boolean(error)}
                        helperText={error}
                        sx={{
                            color: 'var(--text-background-color)',
                            backgroundColor: 'var(--background-color)',
                            borderRadius: '100px',
                            boxShadow: 'var(--input-shadow)',
                            width: '100%',
                            height: '10px',
                            cursor: 'pointer',
                            padding: '0',
                        }}
                    />
                    <AttachFileIcon
                        onClick={activateInput}
                        style={{position: 'absolute', top: '15px', right: '13px', cursor: 'pointer', color: '#ADFA00'}}
                    />
                </>
                : <Link>{placeholder.name}</Link>
            }
        </div>
    );
};

export default FileInput;