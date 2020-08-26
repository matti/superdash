import styles from './SuperButton.module.css'
export default function SuperButton(props) {
  return (
    <button
      type="button"
      className={styles.container + " " + styles[props.style]}
    >
      {props.children}
    </button>
  )
}
