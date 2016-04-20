var conceitos= {
  "descricao":"Lightbot",
  "imagem":"https://lightbot.com/images/icon-152.png"
};

var React = require('react');

var Card = React.createClass({

  render: function () {
    return (
      <div className="row">
        <div className="col l2">
          <div className="card blue">
            <div className="card-title white-text center"><strong>{conceitos.descricao}</strong></div>
            <img className="card-content center-block" src= {conceitos.imagem} style={{borderRadius: 25, height:150}}/>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = Card;
