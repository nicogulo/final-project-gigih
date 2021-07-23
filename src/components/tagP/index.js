import React from 'react';
import style from '../tagP/tagP.css';

export default function TagP({ value }) {
  return <p className={style.p}>{value}</p>;
}
