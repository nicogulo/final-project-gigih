import React from 'react';

import Button from '../button';
import style from './searchBar.module.css';

const SearchBar = ({ search, setSearch, buttonHandleSearch }) => {
  return (
    <div className={style['wrapper-search-bar']}>
      <p>Lets find something for your new playlist</p>
      <input
        id="input-search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="search.."
        type="text"
      />
      <Button
        onClick={buttonHandleSearch}
        buttonStyle="btn-success"
        buttonSize="btn-medium"
        type="button"
        autoComplete="off"
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
