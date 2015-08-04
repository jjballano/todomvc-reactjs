var Link = React.createClass({
  render: function(){
  	return (
  	  <a href={this.props.url} className={this.props.color}>
  	    <label>{this.props.caption}</label>
  	  </a>
  	);
  };
});

var url = 'http://example.com';

React.render(<Link url={url} caption='My site' className='anyClass' />, document.getElementById('nav'));
//I can't use 'class' as a property because it a reserved word 