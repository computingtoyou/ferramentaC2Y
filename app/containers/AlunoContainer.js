var React = require('react');
var Aluno = require('../components/Aluno');

var AlunoContainer = React.createClass({
  getInitialState: function(){
    return{
      username:""
    }
  },

  handleUpdateUser: function(e){
    this.setState({
      username : e.target.value
    })
  },

  handleGetNameUser: function(){
    var username = this.state.username;
    this.setState({
      username :""
    })
  },

// TODO: redirects to main page

  render: function(){
    return(
      <Aluno
        updateUser={this.handleUpdateUser}
        getNameUser={this.handleGetNameUser}
        username = {this.state.username}/>
    )
  }
});

module.exports = AlunoContainer;
