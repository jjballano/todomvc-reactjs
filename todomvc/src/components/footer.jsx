var React = require('react');
var Task = require('../models/task');

module.exports = React.createClass({
	propTypes: {
    context: React.PropTypes.string,
    pending: React.PropTypes.number
  },

  getInitialState: function() {
    return ({
      context: [
        {href: '#/', caption: 'All'},
        {href: '#/active', caption: 'Active'},
        {href: '#/completed', caption: 'Completed'}
      ]
    });
  },

  onClearCompleted: function(){
    var tasks = Task.completed();
    for (var i=0, len = tasks.length; i < len; i++) {
      tasks[i].destroy();
    }
  },

  render: function(){
    var context = this.props.context;
    return (
      <footer className='footer'>
        <span className='todo-count'>
          <strong>{this.props.pending}</strong>
          items left
        </span>
        <ul className='filters'>
        {
          this.state.context.map(function(item, index) {
            className = item.caption.toLowerCase() == context ? 'selected' : '';
            return (
              <li>
                <a className={className} href={item.href}>{item.caption}</a>
              </li>
            )

          })
        }  
        </ul>
        <button className='clear-completed' onClick={this.onClearCompleted}>Clear completed</button>
      </footer>
    );
  }
})