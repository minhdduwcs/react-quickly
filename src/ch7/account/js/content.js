class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      accountNumber: ''
    };
  }

  handleChange(event) {
    console.log('Typed: ', event.target.value);
    this.setState({ accountNumber: event.target.value.replace(/[^0-9]/ig, '') });
  }

  render() {
    return React.createElement(
      'div',
      null,
      'Account Number:',
      React.createElement('input', {
        type: 'text',
        onChange: this.handleChange,
        value: this.state.accountNumber,
        placeholder: '123456'
      }),
      React.createElement('br', null),
      React.createElement(
        'span',
        null,
        this.state.accountNumber.length > 0 ? 'You entered: ' + this.state.accountNumber : ''
      )
    );
  }
}