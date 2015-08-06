var Task = require('./task.jsx'),
    Header = require('/components/header'),
    Content = require('/components/content');    

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
  	  <div>
        <Header />
        <Content>
          //Tasks object will receive in this.props.children all of these Task objects
    	    <Task ref='one' name='Introduction' done=true /> //Reference created in this.refs.one
  	      <Task name='Chapter 1 - First component' done /> //it will send true in done property.
  	      <Task name='Chapter 2 - Properties'/>
        </Tasks>
        <footer>Copyright...</footer>
  	  </div>
  	);
  }
});

/*
Result for this:

<div>
  <header>
    <a href="#pending">pending</a>
    <a href="#done">done</a>
    <a href="#all">all</a>
  </header>
  <ul>
    <li><input type=“checkbox” checked/>Introduction</li>
    <li><input type=“checkbox” checked/>Chapter 1 - First component</li>
    <li><input type=“checkbox”/>‘Chapter 2 - Properties</li>
    <span>Tasks: 3</span>
</ul>
  <footer>Copyright...</footer>
</div>

*/