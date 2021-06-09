import React from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const courseGoals = [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'}
  ]; 

  // return React.createElement('h1', {}, 'Hi, this is React!');
  // return <h1 title="This works!">Hi, this is ReactJS!</h1>;
  // return React.createElement('h1', {title: 'This works!'}, 'Hi, this is ReactJS!');
  
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal />
      <GoalList goals={courseGoals} />
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
