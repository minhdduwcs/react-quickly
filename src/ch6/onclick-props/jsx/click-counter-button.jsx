class ClickCounterButton extends React.Component {
  render() {
    return (
      <button
        className="btn btn-danger"
        onClick={this.props.handleClick}
      >Increase Volume (Current volume is {this.props.counter})</button>
    )
  }
}
