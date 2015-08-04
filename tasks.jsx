var Tasks = React.createClass({
  render: function(){
    return (
      <section>
        <header />
        <ul>
          { this.props.children }
        </ul>
        <footer/>
      </section>
    );
  }
});