var React = require('react'),
    SPARouter = require('spa-router'),
    Header = require('./components/header');
    // Task = require('./models/task');

var App = React.createClass({
  // getInitialState: function() {
  //   return ({context: 'find', pending: 0});
  // }

  componentDidMount: function(){
    SPARouter.listen({
      '/': this.setState.bind(this, {context: 'all'})
    });
    SPARouter.path('');
  },

  render: function() {
        // <Content />
        // <Footer />
    return (
      <div>
        <Header />
      </div>
    );
  }
});

React.render(<App />, document.getElementsByClassName('todoapp')[0]);