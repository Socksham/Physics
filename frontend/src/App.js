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
import AdvPhysics from './screens/main/AdvPhysics';
import Simulations from './screens/main/Simulations';
import { db } from './utils/Firebase';
import { useEffect, useState } from 'react';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/advancedphysics" component={AdvPhysics} />
          <Route exact path="/apphysics1" component={APPhysics1} />
          <Route exact path="/apphysics12" component={APPhysics12} />
          <Route exact path="/apphysicsc" component={APPhysicsC} />
          <Route exact path="/resources" component={Resources} />
          <Route exact path="/physicalscience" component={PhysicalScience} />
          <Route exact path="/physics" component={Physics} />
          <Route exact path="/simulations" component={Simulations} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
