var React = require('react');
var ReactDOM = require('react-dom');
var  {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

//load foundation
require('style!css!foundation-sites/dist/foundation.min.css'); 

//style
require('style!css!sass!applicationStyles');


//style front
require('style!css!app/styles/style.css');

$(document).foundation();
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path= "/"  component={Main}>
      
     </Route>
  </Router>,
  document.getElementById('app')
);
