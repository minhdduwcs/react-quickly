const dataURL = 'file:///home/animal/Documents/tmp/react-quickly/src/ch5/user/real-user-data.json';
ReactDOM.render(
  <div>
    <Users data-url={dataURL} />
  </div>,
  document.getElementById('content')
);
