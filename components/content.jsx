var Content = React.createClass({
  render: function() {
  	return (
  	  <ul>
  	    {this.props.children}
  	    <span>Tasks: {this.props.children.length}</span>
  	  </ul>
  	);
  }
});