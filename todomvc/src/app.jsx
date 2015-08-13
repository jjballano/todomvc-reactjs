var React = require('react'),
    SPARouter = require('spa-router'),
    Header = require('./components/header'),
    Footer = require('./components/footer'),
    Content = require('./components/content'),
    Task = require('./models/task');

var App = React.createClass({
  getInitialState: function() {
    return ({context: 'find', pending: 0});
  },

  componentDidMount: function(){
    Task.observe(function(state){
      this.setState({pending: Task.active().length});
    }.bind(this));

    SPARouter.listen({
      '/': this.setState.bind(this, {context: 'all'}),
      '/active': this.setState.bind(this, {context: 'active'}),
      '/completed': this.setState.bind(this, {context: 'completed'})
    });
    SPARouter.path('');
  },

  render: function() {
    return (
      <div>
        <Header />
        <Content dataSource={Task[this.state.context]()} />
        <Footer context={this.state.context} pending={this.state.pending}/>
      </div>
    );
  }
});

React.render(<App />, document.getElementsByClassName('todoapp')[0]);