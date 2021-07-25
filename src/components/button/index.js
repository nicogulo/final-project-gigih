import React from 'react';
import style from '../button/button.css';

export default function Button({ name }) {
  return <button className={style.btn}>{name}</button>;
}
