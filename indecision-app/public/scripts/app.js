'use strict';

// JSX - Javascript XML
var app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

// const user = {
//   // name: 'Kelok',
//   age: 22,
//   location: 'Brisbane'
// };
// const getLocation = (location) => {
//   if (location) {
//     return <p> Location: {location} </p>;
//   }
// }
// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {user.age >= 18 && <p>Age: {user.age}</p>}  {/* Show second when both true */}
//     {getLocation(user.location)}
//   </div>
// );

var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
