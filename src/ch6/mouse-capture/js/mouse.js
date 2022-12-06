class Mouse extends React.Component {
  handleMouseOver(event) {
    console.log('mouse over on bubbling event');
    console.dir(event, this);
  }

  handleMouseOverCapture(event) {
    console.log('mouse over on capture event');
    console.dir(event, this);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        {
          style: {
            border: '1px solid red'
          },
          onMouseOver: this.handleMouseOver.bind(this),
          onMouseOverCapture: this.handleMouseOverCapture.bind(this)
        },
        'Open DevTools and move your mouse cursor over here'
      )
    );
  }
}