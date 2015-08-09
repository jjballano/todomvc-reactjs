var PureRenderMixin = require('react/addons').addons.PureRenderMixin;

React.createClass({
  mixins: [PureRenderMixin],

  getInitialState: function() {
    return {
      message: 'Hi!'
    };
  },

  componentDidUpdate: function() {
    console.log('Component updated!');
  },

  onClick: function(value, event) {
    console.log('click event', value);
    this.setState({message: value});
  },

  render: function() {
    console.log('Component rendered!');
    return (
      <div>
        <h1>Greeting: {this.state.message}</h1>
        <button onClick={this.onClick.bind(null, 'Hi!')}>Hello</button>
        <button onClick={this.onClick.bind(null, 'Bye!')}>Goodbye</button>
      </div>
    );
  }
});