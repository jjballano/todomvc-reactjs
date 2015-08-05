//properties received are inmutables. It can only change if parent does that


var Task = React.createClass({
  getDefaultProps: function(){
    //default properties will be overridden if they are received
    //name is required so we need to receive it
    return ({
      done: false
    });
  },
  getInitialState: function(){
    return({
      updated: false
    });
  },
  onUpdate: function(event){
    updated: true
  },
  render: function() {
    return(
      <li>       
        <input type='checkbox {(this.props.done ? "checked" : "")}' onClick={this.onUpdate}/>
        {this.props.name}
        { if this.state.update <small>Updated...</small>}
      </li>
    );
  },
  propTypes: {
    //prop types will send a warning to the javascript console (dev mode) if there is any validation error
    name: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool
  }
});