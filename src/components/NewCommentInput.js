import React, { useState } from 'react'
import styles from '../styles/NewCommentInput.module.css'

const NewCommentInput = ({ data, setData }) => {

  const [input, setInput] = useState('')

  const handleAddComment = () => {
    const newComment = {
      content: input,
      createdAt: "1 minute ago",
      id: data.comments.length + 1,
      replies: [],
      score: 0,
      user: {...data.currentUser}
    }

    console.log(newComment)
    setData({...data, comments: [...data.comments, newComment]})
    console.log(input)
  }

  return (
    <div className={styles.wrapper}>
      <img src={data.currentUser.image.png.slice(1,)} alt={data.currentUser.username} className={styles.userImage}/>

      <textarea placeholder="Add a comment..." value={input} onChange={(e) => setInput(e.target.value)} className={styles.inputTextarea}/>

      <div className={styles.sendButtonWrapper}>
        <button className={styles.sendButton} onClick={handleAddComment}>SEND</button>
      </div>
    </div>
  )
}

export default NewCommentInput