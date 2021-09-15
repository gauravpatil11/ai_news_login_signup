// import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
// import HomePage from "./components/HomePage/HomePage";

// function App() {
//   return (
//     <Router>
//         {/* <Navbar/> */}

//           <Switch>
//             <Route path="/"  exact>
//               <HomePage/>
//             </Route>
//             <Route path="/signin" >
//               <SignIn/>
//             </Route>
//             <Route path="/signup">
//               <SignUp/>
//             </Route>
//           </Switch>
//       </Router>
//   );
// }

// export default App;



import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Component } from "react";
import firebaseApp from "./Firebase/firebase";
import HomePage from "./components/HomePage/HomePage";
import SignIn from "./components/SignIn/SignIn";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
    };
  }

  authListener() {
    const auth = getAuth(firebaseApp);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    // const a = false
    // return <div>{a ? <HomePage /> : <SignIn />}</div>;
    // return <div>{this.state.user ? <HomePage /> : <SignIn />}</div>;
    return (
      <Router>
        {" "}
        <Switch>
          {" "}
          <Route path="/" exact>
            {/* <HomePage /> */}
            {/* {a ? <HomePage /> : <SignIn />} */}
            {this.state.user ? <HomePage /> : <SignIn />}
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
