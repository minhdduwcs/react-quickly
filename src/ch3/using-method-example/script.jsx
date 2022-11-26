class Content extends React.Component {
  getURL() {
    return 'http://webapplog.com';
  }

  render() {
    return (
      <div>
        <p>
          Your REACT API URL is:
          <a href={this.getURL()}>
            {this.getURL()}
          </a>
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <Content />,
  document.getElementById('content')
);
