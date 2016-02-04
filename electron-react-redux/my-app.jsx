"use strict";

const React = require("react");

class MyApp extends React.Component {
  render() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )
    );
  }
}