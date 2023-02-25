import React, {useState} from 'react';
import {Link as RouterLink, useHistory} from 'react-router-dom';
import {Grid, Link, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest,} from "../../store/actions/usersActions";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import ErrorWin from "../../components/UI/ErrorWin/ErrorWin";

const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const error = useSelector(state => state.users.registerError);
  const loading = useSelector(state => state.users.registerLoading);
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {error ? <ErrorWin error={error}/> : null}
          <LockOutlined/>
        <Typography component="h1" variant="h6">
          Sign up
        </Typography>
        <form onSubmit={e => {
          submitFormHandler(e, dispatch(registerRequest({ ...user })));
          history.push('/');
        }}>
            <FormInput
                onChange={e => inputChangeHandler(e, setUser)}
                name="username"
                value={user.username}
                placeholder="username"
                error={error && error.message}
            />
            <FormInput
                onChange={e => inputChangeHandler(e, setUser)}
                type="email"
                name="email"
                value={user.email}
                placeholder="email"
                error={error && error.message}
            />
            <FormInput
                onChange={e => inputChangeHandler(e, setUser)}
                type="password"
                name="password"
                value={user.password}
                placeholder="password"
                error={error && error.message}
            />

            <Grid item xs={12}>
              <ButtonWithProgress
                loading={loading}
                disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
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
  );
};

export default Register;