import React from 'react'
import styles from '../styles/Comment.module.css'

const Comment = ({ comment }) => {
  return (
    <div className={[styles.wrapper]}>
      <div className={styles.score}>
        <img src="/images/icon-plus.svg" alt="plus sign" />
        <div>{comment.score}</div>
        <img src="/images/icon-minus.svg" alt="plus sign" className={styles.minusIcon}/>
      </div>

      <div className={styles.commentRightSide}>
        <div className={styles.commentTopRow}>
          <div className={styles.commentInfo}>
            <img src={comment.user.image.png.slice(1,)} alt={`${comment.user.username}`} className={styles.userImage}/>
            <div className={styles.username}>{comment.user.username}</div>
            <div className={styles.createdAt}>{comment.createdAt}</div>
          </div>

          <button className={styles.replyButton}>
            <img src="/images/icon-reply.svg" alt="reply" />
            Reply
          </button>
        </div>
        <div className={styles.content}>{comment.content}</div>
      </div>
    </div>
  )
}

export default Comment