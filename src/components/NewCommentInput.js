import React, { useState } from 'react'
import styles from '../styles/NewCommentInput.module.css'

const NewCommentInput = ({ data }) => {

  const [input, setInput] = useState('')

  const handleAddComment = () => {
    
  }

  console.log(data)
  return (
    <div className={styles.wrapper}>
      <img src={data.currentUser.image.png.slice(1,)} alt={data.currentUser.username} className={styles.userImage}/>

      <textarea placeholder="Add a comment..." value={input} onChange={(e) => setInput(e.target.value)} className={styles.inputTextarea}/>

      <div className={styles.sendButtonWrapper}>
        <button className={styles.sendButton}>SEND</button>
      </div>
    </div>
  )
}

export default NewCommentInput