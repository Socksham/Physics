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
import AdvPhysics from './screens/main/AdvPhysics';
import Simulations from './screens/main/Simulations';
import UserProvider from './utils/providers/UserProvider';
import { db } from './utils/Firebase';
import { useEffect, useState } from 'react';
import EnterCode from './screens/auth/EnterCode';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/advphysics" component={AdvPhysics} />
          <Route exact path="/apphysics1" component={APPhysics1} />
          <Route exact path="/apphysics12" component={APPhysics12} />
          <Route exact path="/apphysicsc" component={APPhysicsC} />
          <Route exact path="/login" component={LoginScreen} />
          <Route exact path="/register" component={RegisterScreen} />
          <Route exact path="/logout" component={LogoutScreen} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/physicalscience" component={PhysicalScience} />
          <Route exact path="/physics" component={Physics} />
          <Route exact path="/simulations" component={Simulations} />
		  <Route exact path="/entercode" component={EnterCode} />
        </Switch>
      </BrowserRouter>
    </UserProvider>

  );
}

export default App;
