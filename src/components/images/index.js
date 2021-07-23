import React from 'react';
import style from '../images/image.css';

export default function Image(props) {
  return <img className={style.img} src={props.src} alt={props.alt} />;
}
