import React, {useState} from 'react';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import {makeStyles} from "tss-react/mui";
import {Alert, Avatar, Container, Grid, Link, Typography} from "@mui/material";
import {LockOpenOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import FormElement from "../../components/UI/Form/FormElement/FormElement";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import {loginUserRequest} from "../../store/actions/usersActions";

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
  const history = useHistory();
  const error = useSelector(state => state.users.loginError);
  const loading = useSelector(state => state.users.loginLoading);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const inputChangeHandler = e => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}));
  };

  const submitFormHandler = async e => {
    e.preventDefault();
    await dispatch(loginUserRequest({...user}));
    history.push('/');
  };

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

        <Grid
          component="form"
          onSubmit={submitFormHandler}
          container
          spacing={2}
        >
          <FormElement
            required={true}
            label="Email"
            name="email"
            value={user.email}
            onChange={inputChangeHandler}
          />

          <FormElement
            type="password"
            required={true}
            label="Password"
            name="password"
            value={user.password}
            onChange={inputChangeHandler}
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
              Sign In
            </ButtonWithProgress>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link component={RouterLink} to="/register">
              Or sign up
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Login;