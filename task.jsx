//properties received are inmutables. It can only change if parent does that


var Task = React.createClass({
  getDefaultProps: function(){
    //default properties will be overridden if they are received
    //name is required so we need to receive it
    return ({
      done: false
    });
  },
  render: function() {
    return(
      <li>       
        <input type='checkbox {(this.props.done ? "checked" : "")}' />
        {this.props.name}
      </li>
    );
  },
  propTypes: {
    //prop types will send a warning to the javascript console (dev mode) if there is any validation error
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool
  }
});