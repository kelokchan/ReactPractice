'use strict';

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Hey. These are toggled on'
      )
    )
  );

  ReactDOM.render(jsx, document.getElementById('app'));
};

render();
