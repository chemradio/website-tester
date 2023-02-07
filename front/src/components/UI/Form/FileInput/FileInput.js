import {useRef} from "react";
import {Button, Grid, TextField} from "@mui/material";
import {makeStyles} from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  input: {
    display: "none",
  }
}));

const FileInput = ({onChange, name, label, setState, placeholder}) => {
  const {classes} = useStyles();
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
    <div style={{position: 'relative'}}>
      <input
        type="file"
        name={name}
        className={classes.input}
        onChange={onFileChange}
        ref={inputRef}
      />
      <Grid container direction="row" spacing={2} alignItems="center">
        <Grid item xs>
          <TextField
              placeholder={placeholder}
              disabled
              label={label}
              onClick={activateInput}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" onClick={activateInput} style={{position: 'absolute', top: '25px', right: '23px'}}>
            Browse
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default FileInput;