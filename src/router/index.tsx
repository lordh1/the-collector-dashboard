import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import LoginForm from '../screens/loginForm';
import Analytic from '../screens/analytic';

export default function AppRouter(): JSX.Element {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/analytic">Analytic</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/analytic">
            <Analytic />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
