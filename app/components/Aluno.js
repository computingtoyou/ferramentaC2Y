var React = require('react');

var Aluno = React.createClass({
  render: function () {
    return (
      <div className="col l3 s6 center-block">
        <div className="card-panel z-depth-6 white">
          <img className="center-block" src="./app/img/Logo.png" style={{height:100}}/>
          <div className="row">
            <div className="input-field">
              <input id="nome"
                type="text"
                value={this.props.username}
                onChange={this.props.updateUser}/>
              <label for="nome">Digite seu nome completo</label>
            </div>
          </div>
          <div className="row">
            <a className="col s12 waves-effect waves-light btn" onClick={this.props.getNameUser}>Começar!</a>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Aluno;
