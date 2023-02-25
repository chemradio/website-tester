import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Grid, Link, Typography} from "@mui/material";
import {LockOpenOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import {loginUserRequest} from "../../store/actions/usersActions";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import ErrorWin from "../../components/UI/ErrorWin/ErrorWin";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.loginError);
  const loading = useSelector(state => state.users.loginLoading);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {error ? <ErrorWin error={error}/> : null}

        <LockOpenOutlined/>
        <Typography component="h1" variant="h6">
          Sign in
        </Typography>


        <form onSubmit={e => {submitFormHandler(e, dispatch(loginUserRequest({userData: user})))}}>
          <FormInput
              onChange={e => inputChangeHandler(e, setUser)}
              name="email"
              value={user.email}
              type="email"
              placeholder="email"
              error={error && error.message}
          />
          <FormInput
              onChange={e => inputChangeHandler(e, setUser)}
              name="password"
              value={user.password}
              type="password"
              placeholder="password"
              error={error && error.message}
          />
          <Grid item xs={12}>
            <ButtonWithProgress
              color="secondary"
              loading={loading}
              disabled={loading}
              type="submit"
              fullWidth
              variant="contained"
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

  );
};

export default Login;