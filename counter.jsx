class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
  }

  onClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      //With ES6 classes, binding is not straight forward, we need to use bind(this)
      <div onClick={this.onClick.bind(this)}>
        Clicks: {this.state.count}
      </div>  
    );
  }

}

Counter.propTypes = {initialCount: React.PropTypes.number};
Counter.defaultProps = {initialCount: 0};

/*
getInitialState method does not exist, you need to use the constructor
propTypes and defaultProps should be defined in the constructor
We can not use Mixin here because ES6 has not support them.
*/