var Task = require('./task.jsx');

var ToDo = React.createClass({
  render: function() {
  	return (
  	  <ul>
  	    <Task name='Introduction' done=true />
  	    <Task name='Chapter 1 - First component' done=true />
  	    <Task name='Chapter 2 - Properties'/>
  	    <Task />
  	  </ul>
  	);
  }
});

/*
Result for this:

<ul>
  <li><input type="checkbox" checked/>Introduction</li>
  <li><input type="checkbox" checked/>Chapter 1 - First component</li>
  <li><input type="checkbox"/>Chapter 2 - Properties</li>
  <li><input type="checkbox"/></li> (and a warning in console)
</ul>

*/