import React from 'react';
import './App.css';
import CommentsListContainer from './components/CommentsListContainer';
import Comment from './components/CommentContainer';

const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <Comment/>
    </div>
  );
};

export default App;