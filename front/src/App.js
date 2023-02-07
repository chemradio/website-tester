import {Route, Switch} from "react-router-dom";
import Layout from "./components/UI/Layout/Layout";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Home from "./containers/Home/Home";
import New from "./containers/New/New";

const App = () => (
    <Layout>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/" exact component={Home}/>
            <Route path="/new" exact component={New}/>
        </Switch>
    </Layout>
);

export default App;
