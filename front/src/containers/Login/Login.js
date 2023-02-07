import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from "tss-react/mui";
import {Alert, Avatar, Container, Grid, Link, Typography} from "@mui/material";
import {LockOpenOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import {loginUserRequest} from "../../store/actions/usersActions";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import FormComponent from "../../components/UI/Form/FormComponent/FormComponent";

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
        <FormComponent
            title="Войдите в свой профиль"
            typeForm="Войти"
            submit={e => submitFormHandler(e, dispatch(loginUserRequest({ userData: user })))}
            onChange={e => inputChangeHandler(e, setUser)}
            inputName={['email', 'password']}
            placeholderName={['Электронная почта', 'Пароль']}
            inputType={['text', 'password']}
            value={user}
            error={error}
            disabled={!user.email || !user.password}
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