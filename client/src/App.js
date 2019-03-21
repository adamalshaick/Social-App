import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/common/PrivateRoute";
import handleAuth from "./utils/handleAuth";
import SecondaryLoading from "./components/common/SecondaryLoading";
import Navbar from "./components/layout/Navbar";
const Landing = lazy(() => import("./components/layout/Landing"));
const Register = lazy(() => import("./components/auth/Register"));
const Dashboard = lazy(() => import("./components/dashboard/Dashboard"));
const Login = lazy(() => import("./components/auth/Login"));
const CreateProfile = lazy(() =>
  import("./components/create-profile/CreateProfile")
);
const Profile = lazy(() => import("./components/profile/Profile"));
const Feed = lazy(() => import("./components/feed/Feed"));
const NotFound = lazy(() => import("./components/not-found/NotFound"));

const App = () => {
  handleAuth();
  return (
    <Router>
      <Suspense
        fallback={
          <>
            <Navbar />
            <SecondaryLoading />
          </>
        }
      >
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/profile/:handle" component={Profile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
          <PrivateRoute exact path="/feed" component={Feed} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
};
export default App;
