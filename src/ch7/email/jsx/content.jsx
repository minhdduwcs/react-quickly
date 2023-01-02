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
    return (
      <div className="well">
        <p>{this.prompt}</p>
        <div className="form-group">
          Email:
          <input
            type="text"
            ref="emailAddress"
            className="form-control"
            placeholder="hi@azat.co"
          />
        </div>
        <div className="form-group">
          Comments:
          <textarea
            ref="comments"
            className="form-control"
            placeholder="I like your website!"
          />
        </div>
        <div className="form-group">
          <a
            value="Submit"
            onClick={this.handleSubmit}
            className="btn btn-primary"
          >Submit</a>
        </div>
      </div>
    );
  }
}
