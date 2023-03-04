import React, {useState} from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link, Typography} from "@mui/material";
import {LockOpenOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {inputChangeHandler, submitFormHandler} from "../../components/UI/Form/Handlers/Handlers";
import {loginUserRequest} from "../../store/actions/usersActions";
import ButtonWithProgress from "../../components/UI/ButtonWithProgress/ButtonWithProgress";
import FormInput from "../../components/UI/Form/FormInput/FormInput";
import ErrorWin from "../../components/UI/ErrorWin/ErrorWin";
import CardAll from "../../components/UI/CardAll/CardAll";

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.users.loginError);
  const loading = useSelector(state => state.users.loginLoading);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  return (
      <div style={{width: '100%', display: "flex", justifyContent: 'center'}}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '35%'
        }}
        >
            <CardAll>
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
                    <ButtonWithProgress
                      loading={loading}
                      disabled={loading}
                      type="submit"
                    >
                      Sign In
                    </ButtonWithProgress>

                    <Link component={RouterLink} to="/register" style={{display: 'block'}}>
                      Or sign up
                    </Link>
                </form>
            </CardAll>
      </div>
    </div>
  );
};

export default Login;