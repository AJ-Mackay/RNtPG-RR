import React from 'react';

import GoalList from './components/GoalList';
import './App.css';

const App = () => {
  // return React.createElement('h1', {}, 'Hi, this is React!');
  // return <h1 title="This works!">Hi, this is ReactJS!</h1>;
  // return React.createElement('h1', {title: 'This works!'}, 'Hi, this is ReactJS!');
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
    </div>
  );
};

// Old React would be written as:
// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">Hi, this is ReactJS!</h1>;
//   }
// }

export default App;
