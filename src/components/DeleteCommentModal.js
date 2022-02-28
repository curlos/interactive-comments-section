import React from 'react'
import styles from '../styles/Modal.module.css'

const DeleteCommentModal = ({ setDeleteOpen, handleDelete }) => {
  return (
    <div className={styles.modal} onClick={() => setDeleteOpen(false)}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <h1>Delete comment</h1>

        <p>Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>

        <div className={styles.buttons}>
          <button className={styles.cancel} onClick={() => setDeleteOpen(false)}>NO, CANCEL</button>
          <button className={styles.confirm} onClick={handleDelete}>YES, DELETE</button>
        </div>
      </div>
    </div>
  )
}

export default DeleteCommentModal