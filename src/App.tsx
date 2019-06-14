import React from 'react';
import './App.css';
import TodoList from './components/todos/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList />
      </header>
    </div>
  );
}

export default App;
