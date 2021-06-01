import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEmployee from './components/ListEmployee';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateEmployee from './components/CreateEmployee';
import updateEmployee from './components/updateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  return (
    <div>
      <Router>
          <Header />
          <div className="container">
        
            <Switch>

                <Route  exact path="/" component={ListEmployee}></Route>
                <Route path="/employees" component={ListEmployee}></Route>
                //step 1
                <Route path="/add-employee/:id" component={CreateEmployee}></Route>
                <Route path="/view-employee/:id" component={ViewEmployee}></Route>
                 </Switch>
            </div>
          {/* <Footer /> */}
      </Router>
     
    </div>

  );
}

export default App;
