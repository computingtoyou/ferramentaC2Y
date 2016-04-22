var React = require('react');
var Professor = require('../components/Professor');

var ProfessorContainer = React.createClass({
  getInitialState: function(){
    return{
      username:"",
      password:""
    }
  },

  HandleUpdateUser: function(e){
    this.setState({
      username : e.target.value
    })
  },

  HandleUpdatePassword: function(e){
    this.setState({
      password: e.target.value
    })
  },

// TODO: redirects to dash

  render: function(){
    return(
      <Professor
        updateUser = {this.HandleUpdateUser}
        updatePassword = {this.HandleUpdatePassword}
        username = {this.state.username}
        password = {this.state.password}/>
    )
  }
});

module.exports = ProfessorContainer;
