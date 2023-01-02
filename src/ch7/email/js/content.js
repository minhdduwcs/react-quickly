class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.prompt = 'Please enter your email to win $1,000,000.';
  }

  handleSubmit(event) {
    const emailAddress = this.refs.emailAddress;
    const comments = this.refs.comments;
    console.log(ReactDOM.findDOMNode(emailAddress).value);
    console.log(ReactDOM.findDOMNode(comments).value);
  }

  render() {
    return React.createElement(
      "div",
      { className: "well" },
      React.createElement(
        "p",
        null,
        this.prompt
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        "Email:",
        React.createElement("input", {
          type: "text",
          ref: "emailAddress",
          className: "form-control",
          placeholder: "hi@azat.co"
        })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        "Comments:",
        React.createElement("textarea", {
          ref: "comments",
          className: "form-control",
          placeholder: "I like your website!"
        })
      ),
      React.createElement(
        "div",
        { className: "form-group" },
        React.createElement(
          "a",
          {
            value: "Submit",
            onClick: this.handleSubmit,
            className: "btn btn-primary"
          },
          "Submit"
        )
      )
    );
  }
}