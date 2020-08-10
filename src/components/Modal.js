import React from 'react'

import styles from './Modal.module.css'

export default function Modal({ content, header, setDisplayModal }) {
  return (
    <div className={styles.customModal}>
      <div className={styles.customCard}>
        <div className={styles.customCardHeader}>{header}</div>
        <div className={styles.customCardContent}>{content}</div>
        <div className={styles.customCardFooter}>
          <button
            onClick={() => {
              setDisplayModal(false)
            }}
            className={styles.customBtnDanger}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
