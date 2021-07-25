import React from 'react';
import style from '../track/style.css';
import Image from '../images/index';
import TagP from '../tagP/index';

export default function Track({ image, title }) {
  return (
    <div className={style['wrapper-list-track']}>
      <table className={style['list-track']}>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Album</th>
            <th>Date Added</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>How You Like That</td>
            <td>The Album</td>
            <td>7 Days Ago</td>
            <td>3:00</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
