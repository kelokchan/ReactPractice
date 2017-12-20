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

// Create a templateTwo var JSX expression
// div
//  h1 -> Kelok Chan
//  


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);