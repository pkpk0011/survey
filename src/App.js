import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Top from './Top/Top';
import Home from './Mid/Home';
import Test from './Mid/Test';
import Result from './Mid/Result';
import Loading from './Mid/Loading';



function App() {
  
  return (
    <div className="App">
      <Router basename="hscandoit.co.kr">
        <div className="App-header">
          <Top />
        </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/test" component={Test} />
            <Route path="/loading" component={Loading} />
            <Route path="/result" component={Result} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
