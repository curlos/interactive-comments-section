import React, { useState } from 'react'
import styles from '../styles/Comment.module.css'
import DeleteCommentModal from './DeleteCommentModal'

const Comment = ({ comment, isReply, data, setData }) => {

  const [deleteOpen, setDeleteOpen] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const handleDelete = () => {
    setData({...data, comments: data.comments.filter((c) => c.id !== comment.id)})
  }

  console.log(editOpen)

  return (
    <div className={`${isReply ? styles.replyWrapper : ''}`}>
      {isReply && (
        <div className={styles.lineWrapper}>
          <div className={styles.lineInMiddle} />
        </div>
      )}
      <div className={`${styles.wrapper} ${isReply ? styles.reply : ''}`}>
        <div className={styles.score}>
          <img src="/images/icon-plus.svg" alt="plus sign" />
          <div>{comment.score}</div>
          <img src="/images/icon-minus.svg" alt="plus sign" className={styles.minusIcon}/>
        </div>

        <div className={styles.commentRightSide}>
          <div className={styles.commentTopRow}>
            <div className={styles.commentInfo}>
              <img src={comment.user.image.png.slice(1,)} alt={`${comment.user.username}`} className={styles.userImage}/>
              <div className={styles.username}>
                {comment.user.username}
                {comment.user.username === data.currentUser.username && (
                  <span className={styles.youTag}>you</span>
                )}
              </div>
              <div className={styles.createdAt}>{comment.createdAt}</div>
            </div>

            {comment.user.username === data.currentUser.username ? (
              <div className={styles.commentActions}>
                <button className={[styles.replyButton, styles.deleteButton].join(' ')} onClick={() => setDeleteOpen(true)}>
                  <img src="/images/icon-delete.svg" alt="reply" />
                  Delete
                </button>

                <button className={styles.replyButton} onClick={() => setEditOpen(true)}>
                  <img src="/images/icon-edit.svg" alt="reply" />
                  Edit
                </button>
              </div>
            ) : (
              <button className={styles.replyButton}>
                <img src="/images/icon-reply.svg" alt="reply" />
                Reply
              </button>
            )}

          </div>
          <div className={styles.content}>
            {isReply && (<span className={styles.replyUsername}>@{comment.replyingTo}</span>)}
            {comment.content}
          </div>
        </div>
      </div>

      {comment.replies && comment.replies.length > 1 && (
        <div className={styles.replies}>
          {comment.replies.map((reply) => <Comment key={reply.id} comment={reply} isReply={true} data={data}/>)}
        </div>
      )}

      {deleteOpen && <DeleteCommentModal setDeleteOpen={setDeleteOpen} handleDelete={handleDelete}/>}
    </div>
  )
}

export default Comment