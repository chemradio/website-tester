import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from "tss-react/mui";
import {Avatar, Container, Grid, Link, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest,} from "../../store/actions/usersActions";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import FormInput from "../../components/UI/Form/FormInput/FormInput";

const useStyles = makeStyles()(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: `${theme.palette.secondary.main} !important`,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: `${theme.spacing(2, 0)} !important`,
  }
}));

const Register = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.registerError);
  const loading = useSelector(state => state.users.registerLoading);
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlined/>
        </Avatar>
        <Typography component="h1" variant="h6">
          Sign up
        </Typography>
        <form onSubmit={e => submitFormHandler(e, dispatch(registerRequest({ ...user })))}>
            <FormInput
                onChange={e => inputChangeHandler(e, setUser)}
                name="username"
                value={user.username}
                placeholder="username"
            />
            <FormInput
                onChange={e => inputChangeHandler(e, setUser)}
                type="email"
                name="email"
                value={user.email}
                placeholder="email"
            />
            <FormInput
                onChange={e => inputChangeHandler(e, setUser)}
                type="password"
                name="password"
                value={user.password}
                placeholder="password"
            />

            <Grid item xs={12}>
              <ButtonWithProgress
                loading={loading}
                disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </ButtonWithProgress>
            </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/login">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Register;