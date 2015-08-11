var React = require('react');

module.exports = React.createClass({
  onKeyDown: function(event){

  },
  
  render: function() {
    return (
      <header className='header'>
        <h1>todos</h1>
        <input className='new-todo'
               placeholder='What needs to be done?'
               onKeyDown={this.onKeyDown}
               autofocus/>
      </header>
    );
  }
});