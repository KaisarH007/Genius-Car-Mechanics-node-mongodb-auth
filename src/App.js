import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import AddServices from "./Pages/AddServices/AddServices";
import Booking from "./Pages/Booking/Booking";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home/Home";
import PageNotFound from "./Pages/Home/PageNotFound/PageNotFound";
import Login from "./Pages/Login/Login";
import ManageServices from "./Pages/ManageServices/ManageServices";
import PrivateRoute from "./Pages/Private/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/booking/:bookingID">
              <Booking></Booking>
            </PrivateRoute>
            <Router path="/login">
              <Login></Login>
            </Router>
            <Route path="/addServices">
              <AddServices></AddServices>
            </Route>
            <Route path="/manageServices">
              <ManageServices></ManageServices>
            </Route>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
