import React from 'react'
import styles from './SuperButton.module.css'
interface Props {
  style: string;
}

class SuperButton extends React.Component<Props> {
  render() {
    return (
      <button
        type="button"
        className={styles.container + " " + styles[this.props.style]}
      >
        {this.props.children}
      </button>
    )
  }

}

export default SuperButton
