var Image = React.createClass({
  render: function(){
    //Adds all received in this.props as attributes of img
    return (<img {...this.props} />);
  }
});

//Example of use:
// <Image src="http://example.com" alt="any alt" />