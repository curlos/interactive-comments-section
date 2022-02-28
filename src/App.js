import React, { useState } from 'react'
import { getData } from './utils/data'
import styles from './styles/App.module.css';
import Comment from './components/Comment'

const App = () => {
  const [data, setData] = useState(getData())

  console.log(data)

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        {data.comments.map((comment) => <Comment key={comment.id} comment={comment} data={data} />)}
      </div>
    </div>
  );
}

export default App;
