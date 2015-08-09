var Product = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <ul>
        {
          this.props.items.map(function(item, index) {
            return (
              <li onClick={this.props.onClick.bind(null, item.id)}>
                {item.name}
              </li>
            );
          }.bind(this));
        }
      </ul>
    );
  }
});