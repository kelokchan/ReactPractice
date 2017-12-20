// JSX - Javascript XML
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle ? app.subtitle }</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  // name: 'Kelok',
  age: 22,
  location: 'Brisbane'
};
function getLocation(location) {
  if (location) {
    return <p> Location: {location} </p>;
  }
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {user.age >= 18 && <p>Age: {user.age}</p>}  {/* Show second when both true */}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);