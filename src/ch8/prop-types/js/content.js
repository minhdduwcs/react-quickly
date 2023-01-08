class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Button, { buttonLabel: "Start" }),
      React.createElement(Button, null),
      React.createElement(Button, { title: 1 }),
      React.createElement(Button, null),
      React.createElement(Button, { email: "not-a-valid-email" }),
      React.createElement(Button, { email: "hi@azat.co" })
    );
  }
}