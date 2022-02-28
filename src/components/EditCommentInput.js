import React, { useState } from 'react'
import styles from '../styles/EditCommentInput.module.css'

const EditCommentInput = ({ data, setData, comment, setEditOpen }) => {

  const [content, setContent] = useState(comment.content)

  const handleEditComment = () => {
    const newComments = [...data.comments]

    for (let c of newComments) {
      if (c.id === comment.id) {
        c.content = content
        break
      } else if (c.replies) {
        console.log(c.replies)
        for (let reply of c.replies) {
          if (reply.id === comment.id) {
            reply.content = content
            break
          }
        }
      }
    }

    console.log(comment)

    setData({...data, comments: [...newComments]})
    setEditOpen(false)
  }

  console.log(data)
  console.log(setData)

  return (
    <div>
      <textarea placeholder="Add a comment..." value={content} onChange={(e) => setContent(e.target.value)} className={styles.inputTextarea}/>

      <div className={styles.updateCommentButtons}>
        <div className={styles.sendButtonWrapper}>
          <button className={styles.cancelButton} onClick={() => setEditOpen(false)}>CANCEL</button>
        </div>
        <div className={styles.sendButtonWrapper}>
          <button className={styles.sendButton} onClick={handleEditComment}>UPDATE</button>
        </div>
      </div>
    </div>
  )
}

export default EditCommentInput