import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function ParamsExample() {
  return (
    <Router>
      <div>
        <h2>Hello to</h2>

        <ul>
          <li>
            <Link to="/users/1234">1234</Link>
          </li>
          <li>
            <Link to="/users">User List</Link>
          </li>
          <li>
            <Link to="/penina">Penina</Link>
          </li>
        </ul>

        <Switch>
        <Route path="/users/:id" children={<UserDetails />} />
        <Route path="/users" children={<Users />} />
        </Switch>
      </div>
    </Router>
  );
}

function Users() {
  return <h2>User List</h2>
}

function UserDetails() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <div>
      <h2>Hello {id}!!</h2>
    </div>
  );
}
