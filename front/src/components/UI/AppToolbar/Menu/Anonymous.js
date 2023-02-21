import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Anonymous = () => {
  return (
    <div style={{backgroundColor: 'var(--toll-bar-background)'}}>
      <Button component={Link} to="/register" color="inherit">
        Sign Up
      </Button>
      <Button component={Link} to="/login" color="inherit">
        Sign In
      </Button>
    </div>
  );
};

export default Anonymous;