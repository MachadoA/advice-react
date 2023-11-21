import React from 'react';
import icon from '../img/icon-dice.svg';
import styles from './button.module.css';

export default function Button({ onClick}) {
  return (
    <button className={styles.btnIcon} onClick={onClick}><img src={icon} alt="icon button" /></button>
  )
}
