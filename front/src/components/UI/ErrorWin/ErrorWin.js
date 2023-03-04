import React from 'react';
import {Alert} from "@mui/material";

const ErrorWin = ({error}) => {
    return (<Alert severity="error">{error.message}</Alert>);
};

export default ErrorWin;