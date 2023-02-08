import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from "tss-react/mui";
import {Alert, Avatar, Container, Grid, Link, Typography} from "@mui/material";
import {LockOpenOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import {loginUserRequest} from "../../store/actions/usersActions";
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
  },
  alert: {
    margin: theme.spacing(3, 0),
    width: '100%',
  },
}));

const Login = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.loginError);
  const loading = useSelector(state => state.users.loginLoading);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlined/>
        </Avatar>
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>

        {error && (
          <Alert severity="error" className={classes.alert}>
            Error! {error.message}
          </Alert>
        )}
        <form onSubmit={e => submitFormHandler(e, dispatch(loginUserRequest({ ...user })))}>
          <FormInput onChange={e => inputChangeHandler(e, setUser)} name="email" value={user.email} type="email"/>
          <FormInput onChange={e => inputChangeHandler(e, setUser)} name="password" value={user.password} type="password"/>
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
              Sign In
            </ButtonWithProgress>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/register">
                Or sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;