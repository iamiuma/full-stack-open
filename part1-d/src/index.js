import ReactDOM from 'react-dom';
import App from './App';

// from the non state hooks component re-rendering:
// let counter = 1;

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



// non state hooks component re-rendering - function to count:
// const refresh = () => {
//   ReactDOM.render(<App counter={counter} />,
//   document.getElementById('root'))
// }

// non hooks 1st way:
// // refresh()
// // counter += 1
// // refresh()
// // counter += 1
// // refresh()

// non hookes 2nd way:
// setInterval(() => {
//   refresh()
//   counter += 1
// }, 1000)
