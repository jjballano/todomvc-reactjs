var moment = require('moment');

var MomentWrapper = React.createClass({
  propTypes: {
    date: React.PropTypes.any,
    format: React.PropTypes.string
  },

  getDefaultProps: function() {
    return ({
      date: new Date(),
      format: 'MMMM Do YYYY, h:mm:ss'
    });
  },

  render: function() {
    var date = moment(this.props.date).format(this.props.format);
    return (<span>{date}</span>);
  }
})