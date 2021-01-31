import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
  Link
} from "react-router-dom";

export default function BasicExample() {
  const [user, setUser] = useState(null);

  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login login={setUser} />
          </Route>
          { !user && <Redirect path="*" to="/login" />}
          <Route path="/users">
            <Users />
          </Route>
        </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
        <ul>
          <li>
          <Link to="/users">Users</Link>
          </li>
          <li>
          <Link to="/login">Login</Link>
          </li>
        </ul>
    </div>
  );
}

function Login(props) {

  const history = useHistory();

  function handleClick() {
    props.login({id: '100', name: 'User'})
    history.push('/')
  }

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

function Users() {
  return (
    <div>
      <h2>Users</h2>
    </div>
  );
}

