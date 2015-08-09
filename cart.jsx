var Cart = React.createClass({
  getInitialState: function(){
    return ({
      { id: 1, name: 'Macbook Air 11'},
      { id: 2, name: 'Macbook 2015'},
      { id: 3, name: 'Macbook Air 13'}

    });
  }

  onItemClick: function(id, event) {
    event.preventDefault();
    console.log(id);
  },

  render: function(){
    return (
      <Product items={this.state.items} onClick={this.onItemClick} />
    );
  }
});