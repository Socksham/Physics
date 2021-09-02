import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/main/HomeScreen';
import APPhysics1 from './screens/main/APPhysics1';
import APPhysics12 from './screens/main/APPhysics12';
import APPhysicsC from './screens/main/APPhysicsC';
import Resources from './screens/main/Resources';
import PhysicalScience from './screens/main/PhysicalScience';
import Physics from './screens/main/Physics';
import LoginScreen from './screens/auth/LoginScreen';
import RegisterScreen from './screens/auth/RegisterScreen';
import LogoutScreen from './screens/auth/LogoutScreen';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/apphysics1" component={APPhysics1}/>
        <Route exact path="/apphysics12" component={APPhysics12}/>
        <Route exact path="/apphysicsc" component={APPhysicsC}/>
        <Route exact path="/login" component={LoginScreen}/>
        <Route exact path="/register" component={RegisterScreen}/>
        <Route exact path="/logout" component={LogoutScreen}/>
        <Route exact path="/resources" component={Resources}/>
        <Route exact path="/physicalscience" component={PhysicalScience}/>
        <Route exact path="/physics" component={Physics}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
