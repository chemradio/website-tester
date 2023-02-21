import React, {useState} from 'react';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import {Alert, Avatar, Container, Grid, Link, Typography} from "@mui/material";
import {LockOpenOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import {loginUserRequest} from "../../store/actions/usersActions";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import FormInput from "../../components/UI/Form/FormInput/FormInput";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.loginError);
  const loading = useSelector(state => state.users.loginLoading);
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
    <Container maxWidth="xs">
      <div>
        <Avatar>
          <LockOpenOutlined/>
        </Avatar>
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>

        {error && (
          <Alert severity="error">
            Error! {error.message}
          </Alert>
        )}
        <form onSubmit={e => {
          submitFormHandler(e, dispatch(loginUserRequest({userData: user})))
          history.push('/')
        }}>
          <FormInput
              onChange={e => inputChangeHandler(e, setUser)}
              name="email"
              value={user.email}
              type="email"
              placeholder="email"
          />
          <FormInput
              onChange={e => inputChangeHandler(e, setUser)}
              name="password"
              value={user.password}
              type="password"
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