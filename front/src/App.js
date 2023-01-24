import Layout from "./components/UI/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";

const App = () => (
    <Layout>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/" exact component={Home}/>
        </Switch>
    </Layout>
);

export default App;
