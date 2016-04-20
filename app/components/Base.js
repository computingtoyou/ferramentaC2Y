var React = require('react');

var Base = React.createClass({
  render: function(){
    return(
      <div className="background-start">
        <div className="transparent-dark full-screen">
          <div className="row wrapper">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Base;
