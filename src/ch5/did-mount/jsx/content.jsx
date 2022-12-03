class Content extends React.Component {
  constructor(props) {
    super(props);
    console.log('I log, therefor I am');
  }

  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this));
  }

  componentDidMount() {
    console.dir(ReactDOM.findDOMNode(this));
  }

  render() {
    console.log('Render');
    return <div />;
  }
}
