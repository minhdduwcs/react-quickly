class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      accountNumber: '',
    };
  }

  handleChange(event) {
    console.log('Typed: ', event.target.value);
    this.setState({ accountNumber: event.target.value.replace(/[^0-9]/ig, '') })
  }

  render() {
    return (
      <div>
        Account Number:
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.accountNumber}
          placeholder="123456"
        />
        <br />
        <span>{
          this.state.accountNumber.length > 0 ?
            'You entered: ' + this.state.accountNumber
            : ''
        }</span>
      </div>
    )
  }
}
