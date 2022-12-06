class ClickCounterButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-info"
        onClick={this.props.handleClick}
      >Don't touch me with your dirty hands!</button>
    );
  }
}
