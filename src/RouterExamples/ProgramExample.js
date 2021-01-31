import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

export default function ProgramExample() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  const history = useHistory();
  console.log(history);
  function handleClick() {
    history.push('/about', {what: 'React'});
  }

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}


function About() {
  const history = useHistory();
  const { state } = useLocation();

  function handleBack() {
    history.goBack();
  }

  function handleDashboard() {
    history.push('/dashboard');
  }

  return (
    <div>
      <h2>About {state?.what}</h2>
      <button onClick={handleBack}>Go back</button>
      <button onClick={handleDashboard}>Go to Dashboard</button>
    </div>
  );
}

function Dashboard() {
  const history = useHistory();

  function handleClick() {
    history.replace('/about');
  }


  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={handleClick}>Go to About (Replace)</button>
    </div>
  );
}
