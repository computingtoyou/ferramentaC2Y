var React = require('react');
var Professor = require('../components/Professor');

var ProfessorContainer = React.createClass({
  getInitialState: function(){
    return{
      username:""
    }
  },

// TODO: handleGetPassword

  HandleUpdateUser: function(e){
    this.setState({
      username : e.target.value
    })
  },

// TODO: redirects to dash

  render: function(){
    return(
      <Professor
        updateUser = {this.HandleUpdateUser}
        username = {this.state.username}/>
    )
  }
});

module.exports = ProfessorContainer;
