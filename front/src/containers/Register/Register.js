import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link, Typography} from "@mui/material";
import {LockOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest,} from "../../store/actions/usersActions";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import ErrorWin from "../../components/UI/ErrorWin/ErrorWin";
import CardAll from "../../components/UI/CardAll/CardAll";

const Register = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.registerError);
  const loading = useSelector(state => state.users.registerLoading);
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  return (
      <div style={{width: '100%', display: "flex", justifyContent: 'center'}}>
          <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '35%'
          }}
          >
              <CardAll>
                {error ? <ErrorWin error={error}/> : null}
                  <LockOutlined/>
                <Typography component="h1" variant="h6">
                  Sign up
                </Typography>
                <form onSubmit={e => submitFormHandler(e, dispatch(registerRequest({ ...user })))}>
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
                      <ButtonWithProgress
                        loading={loading}
                        disabled={loading}
                        type="submit"
                      >
                        Sign Up
                      </ButtonWithProgress>
                      <Link component={RouterLink} to="/login" style={{display: 'block'}}>
                        Already have an account? Sign in
                      </Link>
                </form>
              </CardAll>
          </div>
      </div>
  );
};

export default Register;