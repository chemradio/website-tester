import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from "tss-react/mui";
import {Avatar, Container, Grid, Link, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest,} from "../../store/actions/usersActions";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
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
  }
}));

const Register = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.registerError);
  const loading = useSelector(state => state.users.registerLoading);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
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
          <FormComponent
              title="Создайте свой профиль"
              typeForm="Зарегистрироваться"
              submit={e => submitFormHandler(e, dispatch(registerRequest({ ...user })))}
              onChange={e => inputChangeHandler(e, setUser)}
              inputName={['username', 'email', 'password']}
              placeholderName={['Имя', 'Электронная почта', 'Создайте пароль']}
              inputType={['text', 'text', 'password']}
              value={user}
              error={error}
              endPoint="/login"
              linkToPage="Войти"
              disabled={!user.email || !user.password || !user.username}
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
      </div>
    </Container>
  );
};

export default Register;