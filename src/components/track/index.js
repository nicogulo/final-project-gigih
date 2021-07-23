import React from 'react';
import style from '../track/style.css';
import Image from '../images/index';
import TagP from '../tagP/index';

export default function Track({ image, title }) {
  return (
    <div className={style.track_list}>
      <Image src={image} alt={title} />
      <TagP value={title} />
    </div>
  );
}
