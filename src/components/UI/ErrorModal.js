import React from 'react'
import Card from './Card'
import Button from './Button'
import styles from './ErrorModal.module.css'

const ErrorModal = (props) => {

  return (
    <div>
           <div className={styles.backdrop}></div>
           <Card className={styles.modal}>
        <header className={styles.header}>
            <h2 className={styles.title}>{props.title}</h2>
        </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
      
        <footer className={styles.actions}>
            <Button>Закрыть</Button>
        </footer>
       
    </Card>
    </div>

  )
}

export default ErrorModal