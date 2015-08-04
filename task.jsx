//properties received are inmutables. It can only change if parent does that

//default properties will be overridden if they are received

var Task = React.createClass({
  getDefaultProps: function(){
    return ({
      name: 'Unknown chapter',
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
  }
});