// JSX - Javascript XML
const app = {
  title: 'Indecision App',
  subtitle: 'This is some info',
  options: ['One', 'Two']
};
const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
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

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();