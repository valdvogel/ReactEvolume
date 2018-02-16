var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function(){
        return(
            <div>
                <div className="top-bar" id="mainNavigation">
                    <div className="top-bar-left">
                        <ul className="menu vertical medium-horizontal">
                            <li className="menu-text hide-for-small-only">eVolume</li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <ul className="menu vertical medium-horizontal">
                            <li><a href="#">Seja Locador</a></li>
                            <li><a href="#">Contratar</a></li>
                            <li><a href="#">Entrar</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            
        );
    }

});

module.exports = Nav;