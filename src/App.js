import React, { useState } from 'react'
import { getData } from './utils/data'
import styles from './styles/App.module.css';
import Comment from './components/Comment'

const App = () => {
  const [data, setData] = useState(getData())
  const [currentUser, setCurrentUser] = useState(data.currentUser)
  const [comments, setComments] = useState(data.comments)

  console.log(currentUser)
  console.log(comments)

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        {comments.map((comment) => <Comment comment={comment} key={comment.id}/>)}
      </div>
    </div>
  );
}

export default App;
