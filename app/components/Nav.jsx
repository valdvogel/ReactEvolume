var React = require('react');
var {Link, IndexLink} = require('react-router');

// var Nav = React.createClass({
//     render: function(){
//         return(
//             <div className="top-bar">
//                 <div className="top-bar-left">
//                     <ul className="menu">
//                         <li className="menu-text">
//                             React Timer App
//                         </li>
//                         <li className="menu-text">
//                             <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
//                         </li>
//                         <li className="menu-text">
//                             <IndexLink to="/countdown" activeClassName="active-link">Countdown</IndexLink>
//                         </li>
//                     </ul>
//                 </div>
//                 <div className="top-bar-right">
//                     <ul className="menu">
//                         <li className="menu-text">
//                             Created by <a href="https://github.com/valdvogel" target="_blank">José Valdvogel</a>
//                         </li>
//                     </ul>
//                 </div>
                
//             </div>
            
            
//         );
//     }

// });

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
                            <li><a href="#">Entrar</a></li>
                            <li><a href="#">Contratar</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            
        );
    }

});

module.exports = Nav;