import React from 'react'
import styles from '../styles/Modal.module.css'

const DeleteCommentModal = () => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h1>Delete comment</h1>

        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>

        <div className={styles.buttons}>
          <button className={styles.cancel}>NO, CANCEL</button>
          <button className={styles.confirm}>YES, DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCommentModal