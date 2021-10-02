import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
  import {Login,SignUp,Profile,Chat} from "../containers/index.js";

  function AppRouter(){
      return(
          <Router>
              <Switch>
                  <Route exact path="/" component={Login}/>
                  <Route exact path="/signup" component={SignUp}/>
                  <Route exact path="/profile" component={Profile}/>
                  <Route exact path="/chat" component={Chat}/>
              </Switch>
          </Router>
      )
  }

  export default AppRouter;