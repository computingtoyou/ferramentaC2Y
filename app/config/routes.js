var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Base = require('../components/Base');
var Home = require('../components/Home');
var Card = require('../components/Card');
var Aluno = require('../containers/AlunoContainer');
var Professor = require('../components/Professor');

var Routes = (
  <Router history={HashHistory}>
    <Route path='/' component={Main}>
      <Route component={Base}>
        <IndexRoute component={Home}/>
        <Route path='/Aluno' component={Aluno}/>
        <Route path='/Professor' component={Professor}/>
      </Route>
    </Route>
  </Router>
)

module.exports = Routes;
