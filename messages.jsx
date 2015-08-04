var Messages = React.createClass({
  render: function() {
  	return (
  	  <div> 
  	    <h1>Hello React</h1>
  	    <Hello name='jjballano' />
  	  </div>
  	);
  }
});

//We need a container in every React component wrotten with JSX sintaxis.
/* If I wrote it like this:
  return(
    <h1>Hello React</h1>
    <Hello name='jjballano' />
  )
  it would only render the first element (h1)
*/
