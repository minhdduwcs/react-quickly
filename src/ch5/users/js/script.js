const dataURL = 'file:///home/animal/Documents/tmp/react-quickly/src/ch5/user/real-user-data.json';
ReactDOM.render(React.createElement(
  'div',
  null,
  React.createElement(Users, { 'data-url': dataURL })
), document.getElementById('content'));