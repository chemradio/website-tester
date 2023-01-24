import React from 'react';
import {Alert} from "@mui/material";

const ErrorWin = ({error}) => {
    return (
        <div>
            <Alert severity="error">{error.message}</Alert>
        </div>
    );
};

export default ErrorWin;