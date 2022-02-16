import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
// import { useDispatch, useSelector } from "react-redux";


function App() {
  // const user = useSelector(selectUser);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userAuth) => {
  //     if (userAuth) {
  //       dispatch(
  //         login({
  //           uid: userAuth.uid,
  //           email: userAuth.email,
  //         })
  //       );
  //       //login

  //     } else {
  //       dispatch(logout);
  //       //log out
  //     }
  //   });
  //   return unsubscribe;
  // }, []);
  return (
    <div className="app">

      <Router>

        {/* <LoginScreen /> */}

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}
export default App;
