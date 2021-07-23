import { toUpper } from 'lodash';
import React from 'react';
import Data from '../data/Data';
import Button from '../components/button/Button';
import Image from '../components/images/index';
import TagP from '../components/tagP/index';
import TrackList from '../components/track/index';
import Datas from '../data/ListMusic';
import './createPlaylist.css';

export default function CreatePlaylist() {
  let style = 'details-title';
  return (
    <div className="create-playlist">
      <h1>Create Playlist</h1>
      <div className="create-playlist-detail">
        <Image src={Data.album.images[1].url} alt={Data.album.id} />
        <div className="details">
          <TagP value={toUpper(Data.album.type)} />
          <TagP style={style} value={Data.album.name} />
          <TagP value={toUpper(Data.album.artists[0].name)} />
          <Button name="Search" />
        </div>
      </div>
      <div className="list-track">
        {Datas.map((data) => {
          // console.log(data.album.images[1].url);
          return (
            <TrackList
              key={data.id}
              image={data.album.images[1].url}
              title={data.name}
            />
          );
        })}
      </div>
    </div>
  );
}
