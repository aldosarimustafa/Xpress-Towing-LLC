import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import NavBar from '../../components/NavBar/NavBar';
import LoginForm from '../../components/LoginForm/LoginForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import ServiceListPage from '../ServiceListPage/ServiceListPage';
import ServiceDetailPage from '../ServiceDetailPage/ServiceDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">

      <>
        <NavBar user={user} setUser={setUser} />
        {/* we can use exact to replace the <Switch>. <Switch> will ONLY RENDER ONE of the below component/child if the path match, if 
          it doesn't match, it will keep looking at the below child until it finds a matching route. exact will only render the EXACT
          PATH*/}
        <Switch>
          <Route /* exact */ path="/orders/new">
            <NewOrderPage />
          </Route>
          <Route exact  path="/services">
            <ServiceListPage />
          </Route>
          <Route exact path="/services/:id">
            <ServiceDetailPage />
          </Route>
          <Route /* exact */ path="/orders">
          </Route>
          <Route exact path="/signup">
            <SignUpForm setUser={setUser} />
          </Route>
          <Route exact path="/login">
            <LoginForm setUser={setUser} />
          </Route>
          <Redirect to="/services" />
        </Switch>
      </>

    </main>
  );
}