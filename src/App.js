import React from 'react';

const App = () => {
  // return React.createElement('h1', {}, 'Hi, this is React!');
  return <h1 title="This works!">Hi, this is ReactJS!</h1>;
  // return React.createElement('h1', {title: 'This works!'}, 'Hi, this is ReactJS!');
};

// Old React would be written as:
// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">Hi, this is ReactJS!</h1>;
//   }
// }

export default App;
