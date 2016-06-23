var React = require('react');
var ReactDom = require('react-dom');

var Message = React.createClass ({
    render: function() {
      return (
          <p> Let it go </p>
      );
    }
});

ReactDom.render (<Message />, document.getElementById('app'));
