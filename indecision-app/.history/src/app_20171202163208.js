// JSX - Javascript XML
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var userName = 'Mike'; 
var templateTwo = (
  <div>
    <h1>Kelok Chan</h1>
    <p>Age: 22</p>
    <p>Location: Brisbane</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);