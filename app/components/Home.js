var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function(){
    return(
      <div>
        <div className="row">
          <img className="center-block" src="./app/img/Logo.png" style={{height:300}}/>
        </div>
        <div className="wrapper col l6 s12">
          <Link to='/Professor' className="waves-effect waves-light btn" style={{width:170}}>
            Professor
          </Link>
        </div>
        <div className="wrapper col l6 s12">
          <Link to='/Aluno' className="waves-effect waves-light btn" style={{width:170}}>
            Aluno
          </Link>
        </div>
      </div>
    )
  }
});

module.exports = Home;
