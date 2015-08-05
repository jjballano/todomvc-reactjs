//properties received are inmutables. It can only change if parent does that


var Task = React.createClass({
  
  //Constructors
  componentWillMount: function(){
    //after render. Only run once
    //Client and server
  },
  componentDidMount: function(){
    //At this point, we already have DOM components.
    //Only run once. Only Client.
    //Place to integrate with any JS Framework, set a timer or AJAX requests (fetch data).
  },

  //Update
  //They won't execute during the first render.
  componentWillReceiveProps: function(next_props){
    //it will execute when props are received. 
    //props are the new properties. we could compare with the current ones.
  },
  componentWillUpdate: function(next_props, next_state){
    //It will run just before the render, with the next props and state
    //setState can NOT be used at this point (cycles ahead!)
  },
  shouldComponentUpdate: function(next_props, next_state){
    //It will run just before the render
    //render() won't be executed if this returns false.
  },
  componentDidUpdate: function(prev_props, prev_state){
    //It will execute just after the render is finished.
    //Good place for doing stuff with DOM
  },

  //Destructors
  componentWillUnmount: function(){
    //It will execute just before remove the component from the DOM.
    //Clean stuff, remove timers, remove other components, etc.
  },


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