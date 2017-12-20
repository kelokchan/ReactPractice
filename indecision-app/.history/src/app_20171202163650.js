// JSX - Javascript XML
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Kelok',
  age: 22,
  location: 'Brisbane'
};
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);