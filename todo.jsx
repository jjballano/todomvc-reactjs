var Task = require('./task.jsx');

var ToDo = React.createClass({
  componentDidMount: function(){
    console.log(this.refs.one.getDOMNode());
    /*
    This will print:

    <li data-reactid=".0.0">
      <input type="checkbox" checked/>
      Introduction
    </li>
    */
  },
  render: function() {
  	return (
  	  <ul>
        <Tasks>
          //Tasks object will receive in this.props.children all of these Task objects
    	    <Task ref='one' name='Introduction' done=true /> //Reference created in this.refs.one
  	      <Task name='Chapter 1 - First component' done=true />
  	      <Task name='Chapter 2 - Properties'/>
  	      <Task />
        </Tasks>
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