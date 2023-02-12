import {BrowserRouter, Route, Switch} from "react-router-dom";
import {useSelector} from "react-redux";
import Cookies from 'js-cookie';
import {ProtectedRoute} from "./utils/utils";
import Layout from "./components/UI/Layout/Layout";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import New from "./containers/New/New";
import CookieProvider from "./components/CookieProvider/CookieProvider";

const App = () => {
    const user = useSelector(state => state.users.user)
    return (
        <CookieProvider>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                        <ProtectedRoute
                            isAllowed={Cookies.get('jwt') || user?.token}
                            redirectTo="/login"
                            path="/new"
                            component={New}
                        />
                        <ProtectedRoute
                            isAllowed={Cookies.get('jwt') || user?.token}
                            redirectTo="/login"
                            path="/"
                            component={Home}
                        />
                    </Switch>
                </Layout>
            </BrowserRouter>
        </CookieProvider>
    );
};

export default App;
